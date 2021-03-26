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
        bills(order_by: { status_at: desc }) {
          id
          congress
          type
          number
        }
        electedOfficials: elected_officials(
          order_by: { term_start_at: desc }
          where: { is_active: { _eq: true } }
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

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    console.error(result.errors);
    return;
  }

  const bills = result.data.hasura.bills;
  const images = result.data.congressImages.nodes;

  const findImage = (elected_official_id) =>
    images.find((image) => image.name === elected_official_id);

  // Inject elected_official's Image  data
  const electedOfficials = result.data.hasura.electedOfficials.map(
    (electedOfficial) => ({
      ...electedOfficial,
      image: findImage(electedOfficial.id),
    })
  );

  for (const bill of bills) {
    const slug = `${bill.congress}/${bill.type}${bill.number}`;

    createPage({
      path: slug,
      component: path.resolve(`./src/components/BillTemplate/index.tsx`),
      context: {
        slug,
        electedOfficials,
        billId: bill.id,
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
