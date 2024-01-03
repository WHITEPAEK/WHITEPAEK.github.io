/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, title, children }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
          }
        }
      }
    `
  )

  const defaultTitle = site.siteMetadata?.title
  const defaultSiteUrl = site.siteMetadata.siteUrl
  const defaultOGImage = defaultSiteUrl + '/og-image.png'
  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>

      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={defaultSiteUrl} />
      <meta property="og:image" content={defaultOGImage} />
      <meta property="og:description" content={metaDescription} />
      {children}
    </>
  )
}

export default Seo
