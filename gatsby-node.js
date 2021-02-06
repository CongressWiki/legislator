const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@lib": path.resolve(__dirname, "src/lib"),
        "@types": path.resolve(__dirname, "src/types"),
        "@templates": path.resolve(__dirname, "src/templates"),
        "@top-layer-layout": path.resolve(__dirname, "top-layer-layout/"),
      },
    },
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query BillQuery {
      hasura {
        bills(limit: 100, order_by: { updated_at: desc }) {
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
        }
      }
    }
  `);

  result.data.hasura.bills.forEach((node) => {
    createPage({
      path: node.id,
      component: path.resolve(`./src/templates/Bill.tsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.id,
        ...node,
      },
    });
  });
};
