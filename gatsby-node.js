const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@lib': path.resolve(__dirname, 'src/lib'),
        '@types': path.resolve(__dirname, 'src/types'),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query BillQuery {
      hasura {
        bills(
          limit: 25
          order_by: { updated_at: desc }
          where: { summary: { _neq: "No summary available." } }
        ) {
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
          updated_at
          created_at
          by_request
          bill_text
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.hasura.bills.forEach((node) => {
    createPage({
      path: node.id,
      component: path.resolve(`./src/components/BillTemplate/index.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.id,
        ...node,
      },
    });
  });
};
