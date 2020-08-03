import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styles from "../scss/page.module.scss"

const PageTemplate = ({ data }) => (
  <Layout>
    <h1 className={styles["page__title"]}>{data.strapiPages.label}</h1>
    <div lassName={styles["page__body"]}>{data.strapiPages.content}</div>
  </Layout>
)

export default PageTemplate

export const query = graphql`
  query PageTemplate($name: String!) {
    strapiPages(page_name: { eq: $name }) {
      id
      content
      page_name
      label
    }
  }
`
