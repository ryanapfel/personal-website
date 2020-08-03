// @flow strict
import React from "react"
import getIcon from "../../utils/get-icon"
import styles from "../../scss/icon.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const Contacts = ({ contacts }) => {
  const {
    allStrapiSocial: { edges },
  } = useStaticQuery(query)

  return (
    <div className={styles["contacts"]}>
      <ul className={styles["contacts__list"]}>
        {edges.map(name => {
          const icon = getIcon(name.node.name)
          return (
            <li className={styles["contacts__list-item"]} key={name.node.name}>
              <a
                className={styles["contacts__list-item-link"]}
                href={name.node.path}
                rel="noopener noreferrer"
                target="_blank"
              >
                <svg className={styles["icon"]} viewBox={icon.viewBox}>
                  <title>{name.node.name}</title>
                  <path d={icon.path} />
                </svg>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const query = graphql`
  query ContactQuery {
    allStrapiSocial {
      edges {
        node {
          name
          path
        }
      }
    }
  }
`
export default Contacts
