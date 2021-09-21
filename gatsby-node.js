/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const BillTemplate = path.resolve('./src/components/templates/Bill/index.tsx');
const ElectedOfficialTemplate = path.resolve(
  './src/components/templates/ElectedOfficial/index.tsx'
);
const CommitteeTemplate = path.resolve(
  './src/components/templates/Committee/index.tsx'
);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        // Root
        '@data': path.resolve(__dirname, 'data'),
        // `src/**`
        '@components': path.resolve(__dirname, 'src/components'),
        '@icons': path.resolve(__dirname, 'src/icons'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@type': path.resolve(__dirname, 'src/types'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        // `static/**`
        '@static': path.resolve(__dirname, 'static'),
        '@images': path.resolve(__dirname, 'static/images'),
        '@states': path.resolve(__dirname, 'static/images/states'),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions: gatsbyActions, reporter }) => {
  const bills = await fetchAllBills(graphql, reporter);
  const amendments = await fetchAllAmendments(graphql, reporter);
  const cosponsorships = await fetchAllCosponsorships(graphql, reporter);
  const actions = await fetchAllBillActions(graphql, reporter);
  let rollCalls = await fetchAllRollCalls(graphql, reporter);
  let electedOfficials = await fetchAllElectedOfficials(graphql, reporter);
  const committees = await fetchAllCommittees(graphql, reporter);
  const images = await fetchAllImages(graphql, reporter);
  const subCommittees = await fetchAllSubCommittees(graphql, reporter);

  // Inject elected_official's Image  data
  electedOfficials = electedOfficials.map((electedOfficial) => ({
    ...electedOfficial,
    image: findImage(images, electedOfficial.id),
  }));

  // Inject Roll call voter's elected_official data
  rollCalls = rollCalls.map((rollCall) => {
    const votes = rollCall.votes?.map((vote) => ({
      ...vote,
      elected_official: findElectedOfficial(
        electedOfficials,
        vote.elected_official_id
      ),
    }));

    return {
      ...rollCall,
      votes,
    };
  });

  // Create elected official pages //
  for (const electedOfficial of electedOfficials) {
    await createElectedOfficialPage(gatsbyActions.createPage, electedOfficial, {
      bills,
      amendments,
      cosponsorships,
      committees,
      subCommittees,
      rollCalls,
    });
  }

  // Create bill pages //
  for (const bill of bills) {
    await createBillPage(gatsbyActions.createPage, bill, {
      electedOfficials,
      cosponsorships,
      actions,
      rollCalls,
    });
  }

  // Create committee pages //
  for (const committee of committees) {
    await createCommitteePage(gatsbyActions.createPage, committee, {
      bills,
      actions,
      electedOfficials,
      subCommittees,
    });
  }
};

// Pages

async function createBillPage(
  createPageFn,
  bill,
  { electedOfficials, cosponsorships, actions, rollCalls }
) {
  // Inject chamber data
  bill.originalChamber = getOriginalChamber(bill.type);

  // Inject bill status
  bill.status = humanizeBillStatus(bill.status, bill.originalChamber);

  // Inject Sponsor's elected_official data
  bill.sponsor = findElectedOfficial(electedOfficials, bill.sponsor_id);

  // Inject cosponsorship data
  bill.cosponsorships = findBillCosponsorships(cosponsorships, bill.id);

  // Inject cosponsor's elected_official data
  bill.cosponsorships = bill.cosponsorships.map((cosponsorship) => ({
    ...cosponsorship,
    elected_official: findElectedOfficial(
      electedOfficials,
      cosponsorship.elected_official_id
    ),
  }));

  // Inject actions
  bill.actions = actions.filter((action) => action.bill_id === bill.id);

  // Inject Roll Calls
  bill.roll_calls = rollCalls.filter(
    (rollCall) => rollCall.bill_id === bill.id
  );

  // Inject roll Call into actions
  bill.actions = bill.actions.map((action) => {
    // Add missing roll property if mentioned in text
    if (action.text.includes('Record Vote Number:')) {
      // TODO: Replace with regex capture groups
      const voteTextSplit = action.text.split('Record Vote Number: ');
      let roll = voteTextSplit[voteTextSplit.length - 1];
      // Take period out
      roll = roll.substr(0, roll.length - 1);
      action.roll = Number(roll);
    }

    if (action.text.includes('(Roll no. ')) {
      // TODO: Replace with regex capture groups
      const voteTextSplit = action.text.split('(Roll no. ');
      let roll = voteTextSplit[voteTextSplit.length - 1];
      // Take `).` out
      roll = roll.substr(0, roll.length - 2);
      action.roll = Number(roll);
    }

    action.roll_call = findRollCall(bill.roll_calls, Number(action.roll));

    return action;
  });

  // Inject chamber into actions
  bill.actions = bill.actions.map((action, index) => {
    if (index === 0) {
      action.chamber = bill.originalChamber;
    }

    let lastAction = null;
    if (index > 0) {
      lastAction = bill.actions[index - 1];
      action.chamber = lastAction.chamber;
    }

    if (action?.roll_call?.chamber === 'h') {
      action.chamber = 'HOUSE';
    }

    if (action?.roll_call?.chamber === 's') {
      action.chamber = 'SENATE';
    }

    if (action.status === 'PASS_OVER:SENATE') {
      action.chamber = 'SENATE';
    }

    if (action.status === 'PASS_OVER:HOUSE') {
      action.chamber = 'HOUSE';
    }

    if (lastAction?.status === 'PASS_OVER:SENATE') {
      action.chamber = 'HOUSE';
    }

    if (lastAction?.status === 'PASS_OVER:HOUSE') {
      action.chamber = 'SENATE';
    }

    if (action.text?.includes('Presented to President')) {
      action.chamber = 'PRESIDENT';
    }

    if (action.type === 'enacted') {
      action.chamber = 'PRESIDENT';
    }

    return action;
  });

  const billSlug = `${bill.congress}/${bill.type}${bill.number}`;

  createPageFn({
    path: billSlug,
    component: BillTemplate,
    context: {
      slug: billSlug,
      bill,
    },
  });
}

async function createElectedOfficialPage(
  createPageFn,
  electedOfficial,
  { bills, amendments, cosponsorships, committees, subCommittees, rollCalls }
) {
  const electedOfficialSlug = `officials/${electedOfficial.id}`;

  const electedOfficialBills = bills.filter(
    (bill) => bill.sponsor_id === electedOfficial.id
  );

  const electedOfficialAmendments = amendments.filter(
    (amendment) => amendment.sponsor_id === electedOfficial.id
  );

  const electedOfficialCosponsorships = cosponsorships.filter(
    (cosponsorship) => cosponsorship.elected_official_id === electedOfficial.id
  );

  createPageFn({
    path: electedOfficialSlug,
    component: ElectedOfficialTemplate,
    context: {
      slug: electedOfficialSlug,
      electedOfficial: {
        id: electedOfficial.id,
        position: electedOfficial.position,
        rank: electedOfficial.rank,
        state: electedOfficial.state,
        political_party: electedOfficial.political_party,
        gender: electedOfficial.gender,
        district: electedOfficial.district,
        first_name: electedOfficial.first_name,
        last_name: electedOfficial.last_name,
        preferred_name: electedOfficial.preferred_name,
        is_active: electedOfficial.is_active,
        house_terms: electedOfficial.house_terms,
        senate_terms: electedOfficial.senate_terms,
        vice_president_terms: electedOfficial.vice_president_terms,
        president_terms: electedOfficial.president_terms,
        term_end_at: electedOfficial.term_end_at,
        term_start_at: electedOfficial.term_start_at,
        born_at: electedOfficial.born_at,
        billsCount: electedOfficialBills.length,
        bills: electedOfficialBills,
        amendmentsCount: electedOfficialAmendments.length,
        amendments: electedOfficialAmendments,
        cosponsorshipsCount: electedOfficialCosponsorships.length,
        cosponsorships: electedOfficialCosponsorships,
        committeesMembershipsCount:
          electedOfficial.committee_memberships_aggregate.aggregate.count,
        committeesMemberships:
          electedOfficial.committee_memberships_aggregate.nodes.map(
            (committeeMembershipNode) => {
              return {
                id: committeeMembershipNode.id,
                title: committeeMembershipNode.title,
                rank: committeeMembershipNode.rank,
                party: committeeMembershipNode.party,
                committee: committees.find(
                  (committee) =>
                    committee.id === committeeMembershipNode.committee_id
                ),
              };
            }
          ),
        subCommitteesMembershipsCount:
          electedOfficial.subcommittee_memberships_aggregate.aggregate.count,
        subCommitteesMemberships:
          electedOfficial.subcommittee_memberships_aggregate.nodes.map(
            (subcommitteeMembershipNode) => {
              return {
                title: subcommitteeMembershipNode.title,
                rank: subcommitteeMembershipNode.rank,
                party: subcommitteeMembershipNode.party,
                subCommittees: subCommittees.find(
                  (subcommittee) =>
                    subcommittee.id === subcommitteeMembershipNode.id
                ),
              };
            }
          ),
        votesCount: electedOfficial.votes_aggregate.aggregate.count,
        votes: electedOfficial.votes_aggregate.nodes.map((voteNode) => {
          return {
            id: voteNode.id,
            state: voteNode.state,
            date: voteNode.date,
            decision: voteNode.decision,
            created_at: voteNode.created_at,
            rollCall: rollCalls.find(
              (rollCall) => rollCall.id === voteNode.roll_call_id
            ),
          };
        }),
      },
    },
  });
}

async function createCommitteePage(
  createPageFn,
  committee,
  { bills, actions, electedOfficials, subCommittees }
) {
  // Inject bills that committee has worked on
  const committeeBills = committee.bills_aggregate.nodes.map(
    (billsAggregateNode) => {
      return {
        ...bills.find((bill) => bill.id === billsAggregateNode.id),
        activity: billsAggregateNode.activity,
      };
    }
  );

  // Inject actions
  const committeeActions = committee.committee_actions_aggregate.nodes.map(
    ({ action_id }) => actions.find((action) => action.id === action_id)
  );

  // Inject elected officials into member nodes
  const committeeMembers = committee.committee_memberships_aggregate.nodes.map(
    (membership) => {
      return {
        ...electedOfficials.find(
          (electedOfficial) =>
            electedOfficial.id === membership.elected_official_id
        ),
        rank: membership.rank,
        title: membership.title,
      };
    }
  );

  const committeeSubCommittees = committee.subcommittees_aggregate.nodes.map(
    ({ id }) => subCommittees.find((subCommittee) => subCommittee.id === id)
  );

  const committeeSlug = `committees/${committee.id}`;

  createPageFn({
    path: committeeSlug,
    component: CommitteeTemplate,
    context: {
      slug: committeeSlug,
      committee: {
        id: committee.id,
        name: committee.name,
        type: committee.type,
        jurisdiction: committee.jurisdiction,
        url: committee.url,
        created_at: committee.created_at,
        updated_at: committee.updated_at,
        description: committee.description,
        billsCount: committee.bills_aggregate.aggregate.count,
        bills: committeeBills,
        membersCount: committee.committee_memberships_aggregate.aggregate.count,
        members: committeeMembers,
        subCommitteesCount: committee.subcommittees_aggregate.aggregate.count,
        subCommittees: committeeSubCommittees,
        actionsCount: committee.committee_actions_aggregate.aggregate.count,
        actions: committeeActions,
      },
    },
  });
}

// Sources

async function queryGraphqlSource(graphqlFn, reporter, { query, variables }) {
  const response = await graphqlFn(query, variables);

  if (response.errors) {
    reporter.panicOnBuild('Error while running GraphQL query.');
    console.error(response.errors);
    throw new Error(
      'Error while running GraphQL query. See logs above for details.'
    );
  }

  return response;
}

async function paginateGraphqlSource(
  graphqlFn,
  reporter,
  { query, totalCount, queryLimit, dataKey }
) {
  console.debug(`Paginating through all ${dataKey} data.`);

  const timerName = `Time taken to paginate through all ${dataKey} data`;
  console.time(timerName);

  let collection = [];

  for (let offset = 0; totalCount > offset; offset += queryLimit) {
    const response = await queryGraphqlSource(graphqlFn, reporter, {
      query,
      variables: {
        limit: queryLimit,
        offset,
      },
    });

    if (!response.data.hasura[dataKey]) {
      reporter.panicOnBuild(
        `Graphql response does not have provided dataKey "${dataKey}"`
      );
      console.error(response.errors);
      throw new Error(
        'Error while running GraphQL query. See logs above for details.'
      );
    }

    collection = [...collection, ...response.data.hasura[dataKey]];
  }

  console.timeEnd(timerName);

  return collection;
}

// Data fetches

async function fetchAllBills(graphqlFn, reporter) {
  const billsCountQuery = `
    query BillCountQuery {
      hasura {
        bills_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  `;

  const response = await queryGraphqlSource(graphqlFn, reporter, {
    query: billsCountQuery,
  });
  const billsCount = response.data.hasura.bills_aggregate.aggregate.count;

  const billsQuery = `
        query BillsQuery($limit: Int!, $offset: Int!) {
          hasura {
            bills(
              limit: $limit
              offset: $offset
              order_by: { status_at: desc }
            ) {
              id
              congress
              type
              number
              type
              congress
              number
              subject
              subjects
              title
              short_title
              summary
              sponsor_id
              by_request
              status
              status_at
              introduced_at
              created_at
              updated_at
            }
          }
        }
      `;

  return paginateGraphqlSource(graphqlFn, reporter, {
    query: billsQuery,
    totalCount: billsCount,
    queryLimit: 500,
    dataKey: 'bills',
  });
}

async function fetchAllAmendments(graphqlFn, reporter) {
  const amendmentsCountQuery = `
    query AmendmentsCountQuery {
      hasura {
        amendments_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  `;

  const response = await queryGraphqlSource(graphqlFn, reporter, {
    query: amendmentsCountQuery,
  });
  const amendmentsCount =
    response.data.hasura.amendments_aggregate.aggregate.count;

  const amendmentsQuery = `
        query AmendmentsQuery($limit: Int!, $offset: Int!) {
          hasura {
            amendments(
              limit: $limit
              offset: $offset
              order_by: { status_at: desc }
            ) {
              id
              congress
              type
              number
              type
              congress
              number
              sponsor_id
              status
              status_at
              introduced_at
              updated_at
              bill_id
              purpose
              description
              amendment_id
            }
          }
        }
      `;

  return paginateGraphqlSource(graphqlFn, reporter, {
    query: amendmentsQuery,
    totalCount: amendmentsCount,
    queryLimit: 500,
    dataKey: 'amendments',
  });
}

async function fetchAllCosponsorships(graphqlFn, reporter) {
  const cosponsorshipsCountQuery = `
    query CosponsorshipsCountQuery {
      hasura {
        cosponsorships_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  `;

  const response = await queryGraphqlSource(graphqlFn, reporter, {
    query: cosponsorshipsCountQuery,
  });
  const cosponsorshipsCount =
    response.data.hasura.cosponsorships_aggregate.aggregate.count;

  const cosponsorshipsQuery = `
      query CosponsorshipsQuery($limit: Int!, $offset: Int!) {
        hasura {
          cosponsorships(
            limit: $limit
            offset: $offset
            order_by: { sponsored_at: desc }
            where: { withdrawn_at: { _is_null: true } }
          ) {
            id
            original_cosponsor
            state
            district
            sponsored_at
            withdrawn_at
            elected_official_id
            bill_id
          }
        }
      }
    `;

  return paginateGraphqlSource(graphqlFn, reporter, {
    query: cosponsorshipsQuery,
    totalCount: cosponsorshipsCount,
    queryLimit: 15000,
    dataKey: 'cosponsorships',
  });
}

async function fetchAllBillActions(graphqlFn, reporter) {
  const actionsCountQuery = `
    query ActionsCountQuery {
      hasura {
        actions_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  `;

  const response = await queryGraphqlSource(graphqlFn, reporter, {
    query: actionsCountQuery,
  });
  const actionsCount = response.data.hasura.actions_aggregate.aggregate.count;

  const actionsQuery = `
    query ActionsQuery($limit: Int!, $offset: Int!) {
      hasura {
        actions(
          limit: $limit
          offset: $offset
          order_by: { acted_at: asc }
          ) {
          acted_at
          action_code
          amendment_id
          bill_id
          how
          id
          references
          result
          roll
          status
          suspension
          text
          type
          vote_type
          where
          committees {
            committee_id
          }
        }
      }
    }
  `;

  return paginateGraphqlSource(graphqlFn, reporter, {
    query: actionsQuery,
    totalCount: actionsCount,
    queryLimit: 10000,
    dataKey: 'actions',
  });
}

async function fetchAllRollCalls(graphqlFn, reporter) {
  const rollCallsCountQuery = `
    query RollCallsCountQuery {
      hasura {
        roll_calls_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  `;

  const response = await queryGraphqlSource(graphqlFn, reporter, {
    query: rollCallsCountQuery,
  });
  const rollCallsCount =
    response.data.hasura.roll_calls_aggregate.aggregate.count;

  const rollCallsQuery = `
    query RollCallsQuery($limit: Int!, $offset: Int!) {
      hasura {
        roll_calls(
          limit: $limit
          offset: $offset
          order_by: { date: asc }
        ) {
          id
          type
          chamber
          congress
          number
          requires
          date
          amendment_id
          bill_id
          result
          result_text
          category
          subject
          nomination
          question
          record_modified_at
          session
          updated_at
          votes {
            id
            decision
            elected_official_id
            state
            date
            created_at
          }
        }
      }
    }
  `;

  return paginateGraphqlSource(graphqlFn, reporter, {
    query: rollCallsQuery,
    totalCount: rollCallsCount,
    queryLimit: 150,
    dataKey: 'roll_calls',
  });
}

async function fetchAllCommittees(graphqlFn, reporter) {
  const committeesCountQuery = `
    query CommitteesCountQuery {
      hasura {
        committees_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  `;

  const response = await queryGraphqlSource(graphqlFn, reporter, {
    query: committeesCountQuery,
  });
  const committeesCount =
    response.data.hasura.committees_aggregate.aggregate.count;

  const committeesQuery = `
    query CommitteesQuery($limit: Int!, $offset: Int!) {
      hasura {
        committees(
          limit: $limit
          offset: $offset
        ) {
          id
          name
          type
          jurisdiction
          url
          created_at
          updated_at
          description
          bills_aggregate {
            aggregate {
              count
            }
            nodes {
              activity
              bill_id
            }
          }
          committee_memberships_aggregate {
            aggregate {
              count
            }
            nodes {
              id
              elected_official_id
              title
              rank
              created_at
              updated_at
            }
          }
          subcommittees_aggregate {
            aggregate {
              count
            }
            nodes {
              id
            }
          }
          committee_actions_aggregate {
            aggregate {
              count
            }
            nodes {
              action_id
            }
          }
        }
      }
    }
  `;

  return paginateGraphqlSource(graphqlFn, reporter, {
    query: committeesQuery,
    totalCount: committeesCount,
    queryLimit: 4,
    dataKey: 'committees',
  });
}

async function fetchAllSubCommittees(graphqlFn, reporter) {
  const subCommitteesCountQuery = `
    query SubCommitteesCountQuery {
      hasura {
        subcommittees_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  `;

  const response = await queryGraphqlSource(graphqlFn, reporter, {
    query: subCommitteesCountQuery,
  });
  const subCommitteesCount =
    response.data.hasura.subcommittees_aggregate.aggregate.count;

  const subCommitteesQuery = `
    query SubCommitteesQuery($limit: Int!, $offset: Int!) {
      hasura {
        subcommittees(
          limit: $limit
          offset: $offset
        ) {
          id
          name
          committee_id
        }
      }
    }
  `;

  return paginateGraphqlSource(graphqlFn, reporter, {
    query: subCommitteesQuery,
    totalCount: subCommitteesCount,
    queryLimit: 3,
    dataKey: 'subcommittees',
  });
}

async function fetchAllElectedOfficials(graphqlFn, reporter) {
  const electedOfficialsCountQuery = `
    query ElectedOfficialsCountQuery {
      hasura {
        elected_officials_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  `;

  const response = await queryGraphqlSource(graphqlFn, reporter, {
    query: electedOfficialsCountQuery,
  });
  const electedOfficialsCount =
    response.data.hasura.elected_officials_aggregate.aggregate.count;

  const electedOfficialsQuery = `
    query ElectedOfficialsQuery($limit: Int!, $offset: Int!) {
      hasura {
        elected_officials(
          limit: $limit
          offset: $offset
        ) {
          id
          position
          rank
          state
          political_party
          gender
          district
          first_name
          last_name
          preferred_name
          is_active
          house_terms
          senate_terms
          vice_president_terms
          president_terms
          term_end_at
          term_start_at
          born_at
          created_at
          updated_at
        }
      }
    }
  `;

  return paginateGraphqlSource(graphqlFn, reporter, {
    query: electedOfficialsQuery,
    totalCount: electedOfficialsCount,
    queryLimit: 150,
    dataKey: 'elected_officials',
  });
}

async function fetchAllImages(graphqlFn, reporter) {
  console.debug('Fetching images');
  const timerName = 'Time taken to fetch images';
  console.time(timerName);

  const imagesQuery = `
    query ImagesQuery {
      congressImages: allFile(
        filter: { sourceInstanceName: { eq: "congressImages" } }
      ) {
        nodes {
          extension
          name
          modifiedTime
          childImageSharp {
            gatsbyImageData(
              quality: 80
              height: 400
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `;

  const response = await queryGraphqlSource(graphqlFn, reporter, {
    query: imagesQuery,
  });

  console.timeEnd(timerName);

  return response.data.congressImages.nodes;
}

// Lookups

function findImage(images, elected_official_id) {
  return images.find((image) => image.name === elected_official_id);
}

function findRollCall(billRollCalls, roll) {
  return billRollCalls.find((rollCall) => roll === rollCall.number);
}

function findElectedOfficial(electedOfficials, elected_official_id) {
  const match = electedOfficials.find(
    (electedOfficial) => electedOfficial.id === elected_official_id
  );

  if (!match) {
    throw new Error(
      `Elected Official not in memory where elected_official_id: ${elected_official_id}`
    );
  }

  return match;
}

function findBillCosponsorships(cosponsorships, bill_id) {
  return cosponsorships.filter((cosponsorship) => {
    return cosponsorship.bill_id === bill_id;
  });
}

// Normalizations

function getOriginalChamber(type) {
  const HOUSE = 'HOUSE';
  const SENATE = 'SENATE';

  switch (type.toLowerCase()) {
    case 's':
    case 'sres':
    case 'sjres':
      return SENATE;
    case 'hr':
    case 'hres':
    case 'hjres':
    default:
      return HOUSE;
  }
}

const humanizeBillStatus = (result, originalChamber) => {
  switch (result) {
    case 'INTRODUCED':
      return `INTRODUCED IN ${originalChamber}`;
    case 'PASSED':
      return 'PASSED';
    case 'REFERRED':
      return 'REFERRED TO COMMITTEES';
    case 'REPORTED':
      return `COMMITTEE REPORTED TO ${originalChamber}`;
    case 'PROV_KILL:SUSPENSIONFAILED':
      return 'FAILED';
    case 'PROV_KILL:CLOTUREFAILED':
      return 'FILIBUSTERED';
    case 'FAIL:ORIGINATING:HOUSE':
      return 'FAILED IN HOUSE';
    case 'FAIL:ORIGINATING:SENATE':
      return 'FAILED IN SENATE';
    case 'PASSED:SIMPLERES':
      return `PASSED IN ${originalChamber}`;
    case 'PASSED:CONSTAMEND':
      return 'PENDING STATE APPROVAL';
    case 'PASS_OVER:HOUSE':
      return 'PASSED IN HOUSE';
    case 'PASS_OVER:SENATE':
      return 'PASSED IN SENATE';
    case 'PASSED:CONCURRENTRES':
      return 'PASSED IN HOUSE AND SENATE';
    case 'FAIL:SECOND:HOUSE':
      return 'FAILED IN HOUSE';
    case 'FAIL:SECOND:SENATE':
      return 'FAILED IN SENATE';
    case 'PASS_BACK:HOUSE':
      return 'AMENDED BY HOUSE';
    case 'PASS_BACK:SENATE':
      return 'AMENDED BY SENATE';
    case 'PROV_KILL:PINGPONGFAIL':
      return 'AMENDMENTS DENIED';
    case 'PASSED:BILL':
      return 'PENDING PRESIDENT SIGNATURE';
    case 'CONFERENCE:PASSED:HOUSE':
      return 'CONFERENCE:PASSED:HOUSE';
    case 'CONFERENCE:PASSED:SENATE':
      return 'CONFERENCE:PASSED:SENATE';
    case 'ENACTED:SIGNED':
      return 'SIGNED BY PRESIDENT';
    case 'PROV_KILL:VETO':
      return 'VETOED BY PRESIDENT';
    case 'VETOED:POCKET':
      return 'PRESIDENT DID NOT SIGN BEFORE CONGRESS ADJOURNED';
    case 'VETOED:OVERRIDE_FAIL_ORIGINATING:HOUSE':
      return 'VETO OVERRIDE FAILED IN HOUSE';
    case 'VETOED:OVERRIDE_FAIL_ORIGINATING:SENATE':
      return 'VETO OVERRIDE FAILED IN SENATE';
    case 'VETOED:OVERRIDE_PASS_OVER:HOUSE':
      return 'VETO OVERRIDE PASSED IN HOUSE';
    case 'VETOED:OVERRIDE_PASS_OVER:SENATE':
      return 'VETO OVERRIDE PASSED IN SENATE';
    case 'VETOED:OVERRIDE_FAIL_SECOND:HOUSE':
      return 'VETO OVERRIDE FAILED IN HOUSE';
    case 'VETOED:OVERRIDE_FAIL_SECOND:SENATE':
      return 'VETO OVERRIDE FAILED IN SENATE';
    case 'ENACTED:VETO_OVERRIDE':
      return 'ENACTED';
    case 'ENACTED:TENDAYRULE':
      return 'ENACTED';
    default:
      return 'UNKNOWN';
  }
};
