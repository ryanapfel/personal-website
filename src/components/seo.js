import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ tit, desc, img, pathname, article, date }) => {
  const { site, strapiAsset } = useStaticQuery(query)

  const {
    buildTime,
    siteMetadata: {
      siteLanguage,
      url,
      title,
      subtitle,
      headline,
      author: { name },
    },
  } = site

  const {
    attachment: { publicURL },
  } = strapiAsset

  const seo = {
    title: tit || title,
    description: desc || subtitle,
    image: `${url}${img || publicURL}`,
    path: `${url}${pathname || ""}`,
    date: date || buildTime,
  }

  const schemaOrgWebPage = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    url: seo.path,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: url,
    description: seo.description,
    name: seo.title,
    author: {
      "@type": "Person",
      name: name,
    },
    copyrightHolder: {
      "@type": "Person",
      name: name,
    },
    copyrightYear: "2019",
    creator: {
      "@type": "Person",
      name: name,
    },
    publisher: {
      "@type": "Person",
      name: name,
    },
    datePublished: "2019-01-18T10:30:00+01:00",
    dateModified: seo.date,
    image: {
      "@type": "ImageObject",
      url: seo.image,
    },
  }

  const itemListElement = [
    {
      "@type": "ListItem",
      item: {
        "@id": url,
        name: "Homepage",
      },
      position: 1,
    },
  ]

  let schemaArticle = null

  if (article) {
    schemaArticle = {
      "@context": "http://schema.org",
      "@type": "Article",
      author: {
        "@type": "Person",
        name,
      },
      copyrightHolder: {
        "@type": "Person",
        name,
      },
      copyrightYear: "2019",
      creator: {
        "@type": "Person",
        name,
      },
      publisher: {
        "@type": "Organization",
        name,
        logo: {
          "@type": "ImageObject",
          url: `${url}${publicURL}`,
        },
      },
      datePublished: seo.date,
      dateModified: seo.date,
      description: seo.description,
      headline: seo.title,
      inLanguage: siteLanguage,
      url: seo.path,
      name: seo.title,
      image: {
        "@type": "ImageObject",
        url: seo.image,
      },
      mainEntityOfPage: seo.url,
    }
    // Push current blogpost into breadcrumb list
    itemListElement.push({
      "@type": "ListItem",
      item: {
        "@id": seo.path,
        name: seo.title,
      },
      position: 2,
    })
  }

  const breadcrumb = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    description: "Breadcrumbs list",
    name: "Breadcrumbs",
    itemListElement,
  }

  return (
    <Helmet title={seo.title}>
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="gatsby-starter" content="Gatsby Starter Prismic" />
      {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
      {!article && (
        <script type="application/ld+json">
          {JSON.stringify(schemaOrgWebPage)}
        </script>
      )}
      {article && (
        <script type="application/ld+json">
          {JSON.stringify(schemaArticle)}
        </script>
      )}
      <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script>
    </Helmet>
  )
}

export default SEO

const query = graphql`
  query SEOquery {
    site {
      buildTime
      siteMetadata {
        url
        title
        subtitle
        siteLanguage
        headline
        author {
          name
        }
      }
    }
    strapiAsset(name: { eq: "default-banner" }) {
      alt
      name
      attachment {
        publicURL
        prettySize
      }
    }
  }
`
