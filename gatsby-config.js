/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('./data/config');
const siteAddress = new URL(config.url);
const { HttpLink, from } = require('@apollo/client');
const { RetryLink } = require('@apollo/client/link/retry');
const fetch = require('isomorphic-fetch');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const SITE_S3_BUCKET = process.env.SITE_S3_BUCKET;
const HASURA_GRAPHQL_URL = process.env.GATSBY_HASURA_GRAPHQL_URL;
const HASURA_GRAPHQL_SECRET = process.env.HASURA_GRAPHQL_SECRET;
const GOOGLE_ANALYTICS_ID = process.env.GATSBY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    author: config.author,
    siteUrl: siteAddress.href.slice(0, -1),
    twitter: config.social.twitter,
    keywords: config.keywords,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'congressImages',
        path: `${__dirname}/../scrapers/images/congress/original/`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'HASURA',
        // This is the field under which it's accessible
        fieldName: 'hasura',
        createLink: () =>
          from([
            new RetryLink({
              delay: {
                initial: 100,
                max: 2000,
                jitter: true,
              },
              attempts: {
                max: 5,
                retryIf: (error, operation) => {
                  console.error(error);
                  return (
                    Boolean(error) && ![500, 400].includes(error.statusCode)
                  );
                },
              },
            }),
            new HttpLink({
              uri: `https://${HASURA_GRAPHQL_URL}`,
              headers: {
                'x-hasura-admin-secret': HASURA_GRAPHQL_SECRET,
              },
              fetch,
            }),
          ]),
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.defaultTitle,
        short_name: 'USACounts',
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: 'static/images/SpottedUsaMapLogo.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: SITE_S3_BUCKET,
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
        params: {
          '**/*.woff2': {
            CacheControl: 'public, max-age=31536000, immutable',
          },
        },
        // generateRedirectObjectsForPermanentRedirects: true,
        // generateRoutingRules: false,
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    /**
     * To learn more, visit: https://gatsby.dev/offline
     * This (optional) plugin enables Progressive Web App + Offline
     * functionality
     *
     * Disabled so that site updates are seen immediately.
     */
    /*
      {
       resolve: `gatsby-plugin-offline`,
      },
    */
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        defaults: {
          formats: ['avif', 'webp'],
          quality: 80,
          placeholder: 'blurred',
        },
      },
    },
    {
      resolve: 'gatsby-transformer-sharp',
    },
    {
      resolve: 'gatsby-plugin-image',
    },
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: siteAddress.href.slice(0, -1),
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [GOOGLE_ANALYTICS_ID],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          // optimize_id: 'OPT_CONTAINER_ID',
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          respectDNT: true, // optional
          // Puts tracking script in the head instead of the body
          // head: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
  ],
};
