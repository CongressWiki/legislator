import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import SpottedUsaMapLogo from '@static/images/SpottedUsaMapLogo.png';

export type SEOProps = {
  pathname: string;
  lang?: string;
  title?: string;
  description?: string;
  keywords?: string[];
  billSocialCard?: boolean;
  meta?: ConcatArray<
    | { name: string; content: any; property?: undefined }
    | { property: string; content: any; name?: undefined }
  >;
};

const SEO = ({
  pathname,
  lang,
  title,
  description,
  keywords,
  billSocialCard,
  meta,
}: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            twitter
            siteUrl
          }
        }
      }
    `
  );

  const metaDescription = truncate(
    description || site.siteMetadata.description,
    200
  );
  let socialCard = SpottedUsaMapLogo;

  if (billSocialCard) {
    socialCard = `${site.siteMetadata.siteUrl}/${pathname}/twitter-card.jpg`;
  }

  const canonical = pathname
    ? `${site.siteMetadata.siteUrl}/${pathname}`
    : null;

  let metaKeywords = site.siteMetadata.keywords;

  if (keywords) {
    metaKeywords = [...keywords, ...metaKeywords];
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: 'canonical',
                href: canonical,
              },
            ]
          : []
      }
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `keywords`,
          content: metaKeywords.join(','),
        },
        {
          name: `image`,
          content: socialCard,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: socialCard,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.twitter,
        },
        {
          name: `twitter:site`,
          content: site.siteMetadata.twitter,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: socialCard,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ].concat(meta ? meta : [])}
    >
      {/* Font: Advocate */}
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C41/advocate_c41_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C41/advocate_c41_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C43/advocate_c43_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C43/advocate_c43_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C45/advocate_c45_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C45/advocate_c45_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C51/advocate_c51_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C51/advocate_c51_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C51/advocate_c53_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C51/advocate_c53_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C55/advocate_c55_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C55/advocate_c55_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C61/advocate_c61_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C63/advocate_c63_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Base/C65/advocate_c65_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      /> */}

      {/* Font: Advocate mid */}
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C41/advocate_c41_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C41/advocate_c41_mid_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      /> */}
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C43/advocate_c43_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C43/advocate_c43_mid_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C45/advocate_c45_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C45/advocate_c45_mid_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      /> */}
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C51/advocate_c51_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C51/advocate_c51_mid_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C53/advocate_c53_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C53/advocate_c53_mid_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C55/advocate_c55_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C55/advocate_c55_mid_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C61/advocate_c61_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C63/advocate_c63_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Mid/C65/advocate_c65_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      /> */}

      {/* Font: Advocate slab */}
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C41/advocate_slab_c41_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C41/advocate_slab_c41_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C43/advocate_slab_c43_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C43/advocate_slab_c43_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C45/advocate_slab_c45_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C45/advocate_slab_c45_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C51/advocate_slab_c51_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C51/advocate_slab_c51_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C53/advocate_slab_c53_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C53/advocate_slab_c53_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C55/advocate_slab_c55_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C55/advocate_slab_c55_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C61/advocate_slab_c61_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C63/advocate_slab_c63_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab/C65/advocate_slab_c65_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      /> */}

      {/* Font: Advocate slab mid */}
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C41/advocate_slab_c41_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C41/advocate_slab_c41_mid_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C43/advocate_slab_c43_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C43/advocate_slab_c43_mid_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C45/advocate_slab_c45_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C45/advocate_slab_c45_mid_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C51/advocate_slab_c51_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C51/advocate_slab_c51_mid_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C53/advocate_slab_c53_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C53/advocate_slab_c53_mid_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C55/advocate_slab_c55_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C55/advocate_slab_c55_mid_bold.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C61/advocate_slab_c61_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C63/advocate_slab_c63_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Advocate/Slab_Mid/C65/advocate_slab_c65_mid_regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      /> */}

      {/* Font: Century Supra */}
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/C3/century_supra_c3_bold.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/C3/century_supra_c3_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/C4/century_supra_c4_bold.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/C4/century_supra_c4_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      /> */}
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/T3/century_supra_t3_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/T3/century_supra_t3_bold.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/T3/century_supra_t3_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/T3/century_supra_t3_bold_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/T4/century_supra_t4_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/T4/century_supra_t4_bold.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/T4/century_supra_t4_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Century_Supra/T4/century_supra_t4_bold_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      /> */}

      {/* Font: Concourse */}
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/C2/concourse_c2_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      /> */}
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/C2/concourse_c2_bold.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      /> */}
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/C3/concourse_c3_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/C3/concourse_c3_bold.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      /> */}
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/C4/concourse_c4_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      /> */}
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/C4/concourse_c4_bold.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      /> */}
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/C6/concourse_c6_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/C7/concourse_c7_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/C8/concourse_c8_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      /> */}
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T2/concourse_t2_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T2/concourse_t2_bold.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T2/concourse_t2_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T2/concourse_t2_bold_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      /> */}
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T3/concourse_t3_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T3/concourse_t3_bold.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T3/concourse_t3_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T3/concourse_t3_bold_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      /> */}
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T4/concourse_t4_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T4/concourse_t4_bold.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T4/concourse_t4_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T4/concourse_t4_bold_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      {/* <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T6/concourse_t6_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T6/concourse_t6_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T7/concourse_t7_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T7/concourse_t7_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T8/concourse_t8_regular.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href="/../../fonts/Concourse/T8/concourse_t8_italic.woff2"
        type="font/ttf"
        crossOrigin="anonymous"
      /> */}
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;

function truncate(string: string, limit: number, useWordBoundary = true) {
  if (string.length <= limit) {
    return string;
  }
  const subString = string.substr(0, limit - 1); // the original check
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(' '))
      : subString) + '…'
  );
}
