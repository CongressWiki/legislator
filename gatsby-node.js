const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `bills`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query BillQuery {
      hasura {
        bills(limit: 3) {
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
  `)

  result.data.hasura.bills.forEach(node => {
    createPage({
      path: node.id,
      component: path.resolve(`./src/templates/bill.jsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.id,
        ...node,
      },
    })
  })
}
