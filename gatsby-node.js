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

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query BillsAndCongressImages {
      hasura {
        bills(order_by: { updated_at: desc }) {
          id
          number
          title
          subject
          summary
          congress
          status
          status_at
          type
          introduced_at
          updated_at
          created_at
          by_request
          related_bills
          short_title
          subjects
          sponsor_id
          cosponsorships(order_by: { sponsored_at: desc }) {
            id
            original_cosponsor
            sponsored_at
            state
            withdrawn_at
            district
            elected_official_id
          }
          actions(order_by: { acted_at: desc }) {
            acted_at
            action_code
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
          roll_calls(order_by: { date: desc }) {
            id
            amendment_id
            category
            chamber
            congress
            date
            nomination
            number
            question
            record_modified_at
            requires
            result
            result_text
            session
            subject
            type
            updated_at
            votes {
              created_at
              date
              decision
              state
              id
              elected_official_id
            }
          }
        }
        electedOfficials: elected_officials(order_by: { term_start_at: desc }) {
          id
          created_at
          district
          first_name
          gender
          house_terms
          is_active
          last_name
          political_party
          position
          president_terms
          preferred_name
          rank
          senate_terms
          state
          term_end_at
          term_start_at
          updated_at
          vice_president_terms
          born_at
        }
      }

      congressImages: allFile(
        filter: { sourceInstanceName: { eq: "congressImages" } }
      ) {
        nodes {
          extension
          name
          modifiedTime
          childImageSharp {
            gatsbyImageData(
              width: 300
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    console.error(result.errors);
    return;
  }

  const bills = result.data.hasura.bills;
  const images = result.data.congressImages.nodes;

  const findImage = (elected_official_id) =>
    images.find((image) => image.name === elected_official_id);

  const electedOfficials = result.data.hasura.electedOfficials.map(
    (electedOfficial) => ({
      ...electedOfficial,
      image: findImage(electedOfficial.id),
    })
  );

  const findElectedOfficial = (elected_official_id) =>
    electedOfficials.find(
      (electedOfficial) => electedOfficial.id === elected_official_id
    );

  for (let bill of bills) {
    const slug = `${bill.congress}/${bill.type}${bill.number}`;

    // Sponsor
    bill.sponsor = findElectedOfficial(bill.sponsor_id);
    // Cosponsor
    bill.cosponsorships = bill.cosponsorships.map((cosponsorship) => ({
      ...cosponsorship,
      elected_official: findElectedOfficial(cosponsorship.elected_official_id),
    }));

    // Roll call voters
    if (bill.roll_calls.length > 0) {
      bill.roll_calls = bill.roll_calls.map((roll_call) => ({
        ...roll_call,
        votes: roll_call.votes.map((vote) => ({
          ...vote,
          elected_official: findElectedOfficial(vote.elected_official_id),
        })),
      }));
    }

    createPage({
      path: slug,
      component: path.resolve(`./src/components/BillTemplate/index.tsx`),
      context: {
        slug,
        bill,
      },
    });

    // if (process.env.NODE_ENV === 'production') {
    //   const createSocialCards = require('./src/libs/create-social-cards');
    //   createSocialCards({
    //     bill: bill,
    //     author: 'USACounts',
    //     separator: '|',
    //     fontFile: require.resolve(
    //       './static/fonts/Century_Supra/T3/century_supra_t3_regular.ttf'
    //     ),
    //     slug,
    //   });
    // }
  }
};
