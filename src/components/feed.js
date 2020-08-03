// @flow strict
import React from "react"
import moment from "moment"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "../scss/feed.module.scss"

const Feed = ({ edges }) => (
  <div className={styles["feed"]}>
    {edges.map(edge => (
      <div className={styles["feed__item"]} key={edge.node.id}>
        <div>
          <Link className={styles["img__link"]} to={`/article/${edge.node.id}`}>
            <Img fixed={edge.node.image.childImageSharp.fixed} />
          </Link>
        </div>
        <div className={styles["meta"]}>
          <time
            className={styles["meta__time"]}
            dateTime={moment(edge.node.created_at).format("MMMM D, YYYY")}
          >
            {moment(edge.node.created_at)
              .format("MMMM YYYY")
              .toLocaleUpperCase()}
          </time>

          <span className={styles["meta__category"]}>
            <Link
              to={edge.node.category.category_slug}
              className={styles["meta__category__link"]}
            >
              {edge.node.category.category_name.toLocaleUpperCase()}
            </Link>
          </span>
        </div>
        <h2 className={styles["title"]}>
          <Link
            className={styles["title__link"]}
            to={`/article/${edge.node.id}`}
          >
            {edge.node.title}
          </Link>
        </h2>
      </div>
    ))}
  </div>
)

export default Feed
