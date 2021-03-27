const path = require(`path`);
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@types': path.resolve(__dirname, 'src/types'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@static': path.resolve(__dirname, 'static'),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions: gatsbyActions, reporter }) => {
  const billsQuery = await graphql(`
    query BillsQuery {
      hasura {
        bills(order_by: { status_at: desc }) {
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
          }
        }
      }
    }
  `);

  const actionsQuery = await graphql(`
    query ActionsQuery {
      hasura {
        actions(order_by: { acted_at: desc }) {
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
        }
      }
    }
  `);

  const rollCallsQuery = await graphql(`
    query RollCalls {
      hasura {
        rollCalls: roll_calls(order_by: { date: desc }) {
          id
          type
          chamber
          session
          congress
          number
          category
          question
          requires
          result
          result_text
          date
          subject
          nomination
          record_modified_at
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
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  const { createPage } = gatsbyActions;

  if (billsQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    console.error(billsQuery.errors);
    return;
  }

  const bills = billsQuery.data.hasura.bills;
  const actions = actionsQuery.data.hasura.actions;
  const rollCalls = rollCallsQuery.data.hasura.rollCalls;
  let electedOfficials = electedOfficialsQuery.data.hasura.electedOfficials;
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

  // Inject elected_official's Image  data
  electedOfficials = electedOfficials.map((electedOfficial) => ({
    ...electedOfficial,
    image: findImage(electedOfficial.id),
  }));

  const BillTemplate = path.resolve(`./src/components/BillTemplate/index.tsx`);

  for (const bill of bills) {
    // Inject Sponsor's elected_official data
    bill.sponsor = findElectedOfficial(bill.sponsor_id);

    // Inject Cosponsor's elected_official data
    bill.cosponsorships = bill.cosponsorships.map((cosponsorship) => ({
      ...cosponsorship,
      elected_official: findElectedOfficial(cosponsorship.elected_official_id),
    }));

    // Inject Actions
    bill.actions = actions.filter((action) => action.bill_id === bill.id);

    // Inject Roll Calls
    bill.roll_calls = rollCalls.filter(
      (rollCall) => rollCall.bill_id === bill.id
    );

    // Inject Roll call voter's elected_official data
    if (bill.roll_calls.length > 0) {
      bill.roll_calls = bill.roll_calls.map((roll_call) => ({
        ...roll_call,
        votes: roll_call.votes?.map((vote) => ({
          ...vote,
          elected_official: findElectedOfficial(vote.elected_official_id),
        })),
      }));
    }

    const slug = `${bill.congress}/${bill.type}${bill.number}`;

    createPage({
      path: slug,
      component: BillTemplate,
      context: {
        slug,
        bill: bill,
      },
    });

    if (process.env.NODE_ENV === 'production') {
      const createSocialCards = require('./src/libs/create-social-cards');
      createSocialCards({
        bill: bill,
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
