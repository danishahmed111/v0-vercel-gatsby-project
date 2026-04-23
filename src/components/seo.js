import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({ description, title, image, pathname }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            author
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaTitle = title ? `${title} | ${site.siteMetadata.title}` : site.siteMetadata.title
  const metaImage = image || `${site.siteMetadata.siteUrl}/og-image.jpg`
  const metaUrl = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : site.siteMetadata.siteUrl

  return (
    <Helmet>
      <html lang="en" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />

      {/* Open Graph Tags */}
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.social?.twitter || `@johndoe`} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Additional Meta Tags */}
      <meta name="author" content={site.siteMetadata.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  )
}

export default Seo
