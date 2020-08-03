import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styles from "../../scss/sidebar.module.scss"

const Author = ({ children }) => {
  const data = useStaticQuery(graphql`
    query AuthorQuery {
      strapiAsset(name: { in: "profile" }) {
        alt
        id
        name
        attachment {
          childImageSharp {
            fixed(width: 80) {
              base64
              src
              srcSet
              height
              width
            }
          }
        }
      }
    }
  `)

  return (
    <div className={styles["author"]}>
      <Link to="/">
        <Img
          className={styles["author__photo"]}
          fixed={data.strapiAsset.attachment.childImageSharp.fixed}
        />
      </Link>

      <div>{children}</div>
    </div>
  )
}

export default Author
