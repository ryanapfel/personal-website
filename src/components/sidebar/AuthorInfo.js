import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styles from "../../scss/sidebar.module.scss"

const AuthorInfo = ({ children }) => {
  const data = useStaticQuery(graphql`
    query AuthorInfo {
      strapiAsset(name: { eq: "bio" }) {
        alt
        id
        name
      }
    }
  `)

  return (
    <>
      <h2 className={styles["author__title"]}>Ryan Apfel</h2>

      <p className={styles["author__subtitle"]}>{data.strapiAsset.alt}</p>
    </>
  )
}

export default AuthorInfo
