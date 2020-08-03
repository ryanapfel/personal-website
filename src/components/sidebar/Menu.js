import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import styles from "../../scss/sidebar.module.scss"

const Menu = () => {
  const data = useStaticQuery(graphql`
    query MenuQuery {
      allStrapiPages {
        edges {
          node {
            page_name
            label
          }
        }
      }
    }
  `)

  return (
    <div className={styles["menu"]}>
      <ul className={styles["menu__list"]}>
        {data.allStrapiPages.edges.map(item => (
          <li className={styles["menu_item"]}>
            <Link
              className={styles["menu__link"]}
              to={`/page/${item.node.page_name}`}
            >
              {item.node.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Menu
