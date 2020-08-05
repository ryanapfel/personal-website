const siteConfig = require("./config.js")

module.exports = {
  siteMetadata: {
    url: "https://dazzling-neumann-1251df.netlify.appm",
    pathPrefix: "/",
    title: "Ryan Apfel Personal Website",
    subtitle: "A place to share my thoughts and feelings",
    headline: "Ayo",
    copyright: "© All rights reserved.",
    postsPerPage: 4,
    siteLanguage: "ENG",
    googleAnalyticsId: "UA-73379983-2",
    author: {
      name: "Ryan Apfel",
      bio: "Ryan Apfel",
    },
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://personal-core.cap.ryanapfel.com",
        contentTypes: [
          `articles`,
          `user`,
          `pages`,
          `category`,
          `asset`,
          `social`,
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
