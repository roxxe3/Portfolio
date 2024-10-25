import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

/**
 * Search engine optimatization component
 */
const SEO = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            image
            twitterUsername
          }
        }
      }
    `,
  );

  const metaImage = `${site.siteMetadata.url}${site.siteMetadata.image}`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{site.siteMetadata.title}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="/favicon-16x16.png" type="image/png"
      />
      <link
        rel="icon"
        href="/favicon-16x16.png" type="image/png"
      />
      <meta name="description" content={site.siteMetadata.description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:image" content={site.siteMetadata.image} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:url" content={site.siteMetadata.url} />
      <meta property="twitter:card" content="summary" />
      <meta
        property="twitter:description"
        content={site.siteMetadata.description}
      />
      <meta property="twitter:image" content={metaImage} />
    </Helmet>
  );
};

export default SEO;
