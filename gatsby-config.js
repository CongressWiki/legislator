const path = require('path');
const config = require('./data/config');
const siteAddress = new URL(config.url);
const SITE_S3_BUCKET = 'usacounts.com';
const IMAGES_S3_BUCKET = 'democracy-images';
const CONGRESS_IMAGES_PATH = path.resolve(
  __dirname,
  '..',
  'scrapers',
  'images',
  'congress',
  'original'
);

module.exports = {
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    author: config.author,
    siteUrl: siteAddress.href.slice(0, -1),
    twitter: config.social.twitter,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `congressImages`,
        path: `${__dirname}/../scrapers/images/congress/original/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.defaultTitle,
        short_name: `USACounts`,
        start_url: `/`,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: `minimal-ui`,
        icon: `static/images/USA_Map_Spotted.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'HASURA',
        // This is the field under which it's accessible
        fieldName: 'hasura',
        url: `https://usacounts.com/v1/graphql`,
        headers: {
          'x-hasura-admin-secret': 'gd4yRbE36n6nDy6G',
        },
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: SITE_S3_BUCKET,
        protocol: siteAddress.protocol.slice(0, -1),
        hostname: siteAddress.hostname,
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [config.googleAnalyticsID],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          // exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
    'gatsby-plugin-svgr',
    // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
    // {
    //   resolve: `gatsby-plugin-sharp`,
    //   options: {
    //     // Available options and their defaults:
    //     base64Width: 20,
    //     forceBase64Format: `jpg`, // valid formats: png,jpg,webp
    //     useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
    //     stripMetadata: true,
    //     defaultQuality: 100,
    //     failOnError: true,
    //   },
    // },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteAddress.href.slice(0, -1),
      },
    },
  ],
};
