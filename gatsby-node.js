const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@types': path.resolve(__dirname, 'src/types'),
        '@static': path.resolve(__dirname, 'static'),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query BillQuery {
      hasura {
        bills(order_by: { updated_at: desc }) {
          id
          number
          title
          subject
          summary
          sponsor
          congress
          actions
          status
          status_at
          type
          introduced_at
          created_at
          updated_at
          bill_text
          by_request
          elected_official_sponsor {
            born_at
            created_at
            district
            first_name
            gender
            house_terms
            id
            is_active
            last_name
            political_party
            position
            preferred_name
            rank
            senate_terms
            state
            term_end_at
            term_start_at
            updated_at
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.hasura.bills.forEach((bill) => {
    createPage({
      path: `${bill.congress}/${bill.type}${bill.number}`,
      component: path.resolve(`./src/components/BillTemplate/index.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: `${bill.congress}/${bill.type}${bill.number}`,
        ...bill,
      },
    });
  });
};
