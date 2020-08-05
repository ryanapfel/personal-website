const path = require(`path`)

const makeRequest = (graphql, request) =>
  new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
      graphql(request).then(result => {
        if (result.errors) {
          reject(result.errors)
        }

        return result
      })
    )
  })

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const getArticles = makeRequest(
    graphql,
    `{
        allStrapiArticles {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
      `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiArticles.edges.forEach(({ node }) => {
      createPage({
        path: `/article/${node.slug}`,
        component: path.resolve(`src/templates/article.js`),
        context: {
          id: node.id,
        },
      })
    })
  })

  const getPages = makeRequest(
    graphql,
    `{
        allStrapiPages {
          edges {
            node {
              page_name
            }
          }
        }
      }
      `
  ).then(result => {
    // Create pages for each article.
    result.data.allStrapiPages.edges.forEach(({ node }) => {
      createPage({
        path: `/page/${node.page_name}`,
        component: path.resolve(`src/templates/page.js`),
        context: {
          name: node.page_name,
        },
      })
    })
  })

  // Query for articles nodes to use in creating pages.
  return [getArticles, getPages]
}
