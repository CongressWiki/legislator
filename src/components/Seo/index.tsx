/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
// TODO: import image and use in commented out meta tags
// import { ReactComponent as Thumbnail } from '../../src/images/us-states.svg';

export type SEOProps = {
  description?: string;
  lang?: string;
  meta?: ConcatArray<
    | { name: string; content: any; property?: undefined }
    | { property: string; content: any; name?: undefined }
  >;
  title?: string;
};

const SEO = ({ description, lang, meta, title }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            twitter
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s - ${defaultTitle}` : 'USACounts'}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        // {
        //   name: `image`,
        //   content: Thumbnail,
        // },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        // {
        //   property: `og:image`,
        //   content: Thumbnail,
        // },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        // {
        //   name: `twitter:image:src`,
        //   content: Thumbnail,
        // },
      ].concat(meta)}
    >
      {/* Font: Advocate C45 mid */}
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/advocate_c45_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/advocate_c45_mid_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Font: Century Supra t3 */}
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/century_supra_t3_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/century_supra_t3_bold.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/century_supra_t3_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/century_supra_t3_bold_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />

      {/* Font: Concourse t2 */}
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse_T2/century_supra_t3_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse_T2/century_supra_t3_bold.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse_T2/century_supra_t3_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse_T2/century_supra_t3_bold_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
