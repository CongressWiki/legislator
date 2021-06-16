/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const createBillSocialCards = require('./twitter_cards/create-bill-social-cards');
// const createOfficialSocialCards = require('./twitter_cards/create-official-social-cards');
const path = require('path');

const BillTemplate = path.resolve('./src/components/templates/Bill/index.tsx');
const ElectedOfficialTemplate = path.resolve(
  './src/components/templates/ElectedOfficial/index.tsx'
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
  const billCountQuery = await graphql(`
    query BillCountQuery {
      hasura {
        bills_aggregate {
          aggregate {
            count
          }
        }
      }
    }
  `);

  const billsCount = billCountQuery.data.hasura.bills_aggregate.aggregate.count;

  let bills = [];
  const queryLimit = 500;

  for (let offset = 0; billsCount > offset; offset += queryLimit) {
    const billsQuery = await graphql(
      `
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
      `,
      { limit: queryLimit, offset }
    );

    if (billsQuery.errors) {
      reporter.panicOnBuild('Error while running GraphQL query.');
      console.error(billsQuery.errors);
      throw new Error(
        'Error while running GraphQL query. See logs above for details.'
      );
    }

    bills = [...bills, ...billsQuery.data.hasura.bills];
  }

  const cosponsorshipsQuery = await graphql(
    `
      query CosponsorshipsQuery {
        hasura {
          cosponsorships(
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
    `
  );

  const actionsQuery = await graphql(`
    query ActionsQuery {
      hasura {
        actions(order_by: { acted_at: asc }) {
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
  `);

  const rollCallsQuery = await graphql(`
    query RollCallsQuery {
      hasura {
        rollCalls: roll_calls(order_by: { date: asc }) {
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
  `);

  const committeesQuery = await graphql(`
    query CommitteesQuery {
      hasura {
        committees {
          id
          created_at
          updated_at
          type
          name
          description
          jurisdiction
          house_committee_id
          senate_committee_id
          url
          subcommittees {
            id
          }
        }
      }
    }
  `);

  const subcommitteesQuery = await graphql(`
    query SubCommitteesQuery {
      hasura {
        subcommittees {
          id
          name
          committee_id
        }
      }
    }
  `);

  const electedOfficialsQuery = await graphql(`
    query ElectedOfficialsQuery {
      hasura {
        electedOfficials: elected_officials(order_by: { term_start_at: desc }) {
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
  `);

  const imagesQuery = await graphql(`
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
              height: 300
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  const { cosponsorships } = cosponsorshipsQuery.data.hasura;
  const { actions } = actionsQuery.data.hasura;
  let { rollCalls } = rollCallsQuery.data.hasura;
  let { electedOfficials } = electedOfficialsQuery.data.hasura;
  const { committees } = committeesQuery.data.hasura;
  const { subcommittees } = subcommitteesQuery.data.hasura;
  const images = imagesQuery.data.congressImages.nodes;

  const findImage = (elected_official_id) =>
    images.find((image) => image.name === elected_official_id);

  const findElectedOfficial = (elected_official_id) => {
    const match = electedOfficials.find(
      (electedOfficial) => electedOfficial.id === elected_official_id
    );

    if (!match) {
      throw new Error(
        `Elected Official not in memory where elected_official_id: ${elected_official_id}`
      );
    }

    return match;
  };

  const findBillCosponsorships = (bill_id) => {
    return cosponsorships.filter((cosponsorship) => {
      return cosponsorship.bill_id === bill_id;
    });
  };

  const findRollCall = (billRollCalls, roll) =>
    billRollCalls.find((rollCall) => roll === rollCall.number);

  const getOriginalChamber = (type) => {
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
  };

  const getBillStatus = (result, originalChamber) => {
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

  // Inject elected_official's Image  data
  electedOfficials = electedOfficials.map((electedOfficial) => ({
    ...electedOfficial,
    image: findImage(electedOfficial.id),
  }));

  // Inject Roll call voter's elected_official data
  rollCalls = rollCalls.map((rollCall) => {
    const votes = rollCall.votes?.map((vote) => ({
      ...vote,
      elected_official: findElectedOfficial(vote.elected_official_id),
    }));

    return {
      ...rollCall,
      votes,
    };
  });

  // Create elected official pages //
  for (const electedOfficial of electedOfficials) {
    const slug = `officials/${electedOfficial.id}`;

    gatsbyActions.createPage({
      path: slug,
      component: ElectedOfficialTemplate,
      context: {
        slug,
        id: electedOfficial.id,
        electedOfficial,
      },
    });

    // if (process.env.NODE_ENV === 'production') {
    //   createOfficialSocialCards({
    //     electedOfficial: electedOfficial,
    //     author: 'USACounts',
    //     separator: '|',
    //     fontFile: require.resolve(
    //       './static/fonts/Century_Supra/T3/century_supra_t3_regular.ttf'
    //     ),
    //     slug,
    //   });
    // }
  }

  // Create bill pages //
  for (const bill of bills) {
    // Inject chamber data
    bill.originalChamber = getOriginalChamber(bill.type);

    // Inject bill status
    bill.status = getBillStatus(bill.status, bill.originalChamber);

    // Inject Sponsor's elected_official data
    bill.sponsor = findElectedOfficial(bill.sponsor_id);

    // Inject cosponsorship data
    bill.cosponsorships = findBillCosponsorships(bill.id);

    // Inject cosponsor's elected_official data
    bill.cosponsorships = bill.cosponsorships.map((cosponsorship) => ({
      ...cosponsorship,
      elected_official: findElectedOfficial(cosponsorship.elected_official_id),
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

    const slug = `${bill.congress}/${bill.type}${bill.number}`;

    gatsbyActions.createPage({
      path: slug,
      component: BillTemplate,
      context: {
        slug,
        bill,
      },
    });

    if (process.env.NODE_ENV === 'production') {
      await createBillSocialCards({
        bill,
        author: 'USACounts',
        separator: '|',
        fontFile: require.resolve(
          './static/fonts/Century_Supra/T3/century_supra_t3_regular.ttf'
        ),
        slug,
      });
    }
  }
};
