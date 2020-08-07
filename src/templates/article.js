import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import styles from "../scss/article.module.scss"

//tit, desc, img, pathname, article, date
const ArticleTemplate = ({ data }) => {
  const {
    strapiArticles: { title, content, image, created_at, slug },
  } = data

  return (
    <Layout
      tit={title}
      desc={content}
      img={image.publicURL}
      pathname={slug}
      article={true}
      date={created_at}
    >
      <div className={styles["page__back"]}>
        <Link to={`/`}>&#8592; Home</Link>
      </div>
      <Img fixed={image.childImageSharp.fixed} />

      <h1 className={styles["page__title"]}>{title}</h1>

      <div>{content}</div>
    </Layout>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticles(id: { eq: $id }) {
      title
      slug
      content
      createdAt
      image {
        publicURL
        childImageSharp {
          fixed(width: 600, quality: 100) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  }
`
