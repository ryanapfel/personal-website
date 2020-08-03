import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Feed from "../components/feed.js"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />

    <Feed edges={data.allStrapiArticles.edges} />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticles {
      edges {
        node {
          category {
            category_name
            category_slug
          }
          id
          slug
          title
          created_by {
            firstname
            lastname
            id
          }
          created_at
          image {
            id
            childImageSharp {
              fixed(height: 200) {
                base64
                src
                srcSet
                height
                width
              }
            }
          }
          content
        }
      }
    }
  }
`
