import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styles from "../../scss/sidebar.module.scss"

import Author from "./Author"
import AuthorInfo from "./AuthorInfo"
import Menu from "./Menu"
import Contact from "./Contact"

const SideBar = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SidebarQuery {
      allFile {
        nodes {
          accessTime
        }
      }
    }
  `)

  const social = ["twitter", "github", "facebook", "instagram"]

  return (
    <header className={styles["sidebar"]}>
      <div className={styles["sidebar__inner"]}>
        <Author>
          <AuthorInfo className={styles["sidebar__author"]} />
        </Author>
        <Menu />
        <Contact contacts={social} />
      </div>
    </header>
  )
}
export default SideBar
