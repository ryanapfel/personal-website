/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import SEO from "./seo"
import SideBar from "./sidebar/sidebar"
import "../scss/init.scss"
import styles from "../scss/layout.module.scss"

const Layout = ({ children, tit, desc, img, pathname, article, date }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={styles["layout"]}>
      <SEO
        tit={tit}
        desc={desc}
        img={img}
        pathname={pathname}
        article={article}
        date={date}
      />
      <SideBar siteTitle={data.site.siteMetadata.title} />

      <main className={styles["main"]}>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
