const path = require('path');
const siteAddress = new URL('https://usacounts.com');
const SITE_S3_BUCKET = 'usacounts.com';
const IMAGES_S3_BUCKET = 'democracy-images';

module.exports = {
  siteMetadata: {
    title: `USACounts`,
    description: `Keeping US-Accountable.`,
    author: `@ryparker`,
    siteUrl: siteAddress.href.slice(0, -1),
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `congressImages`,
        path: path.resolve(
          __dirname,
          '..',
          'scrapers',
          'images',
          'congress',
          'original'
        ),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `USACounts`,
        short_name: `USACounts`,
        start_url: `/`,
        background_color: `hsl(250deg, 70%, 7%)`,
        theme_color: `hsl(50deg, 100%, 50%)`,
        display: `minimal-ui`,
        icon: `src/images/us-states.svg`, // This path is relative to the root of the site.
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
        trackingIds: ['G-P7RGJJQ8KX'],
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
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Available options and their defaults:
        base64Width: 20,
        forceBase64Format: `jpg`, // valid formats: png,jpg,webp
        useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
        stripMetadata: true,
        defaultQuality: 100,
        failOnError: true,
      },
    },
    {
      resolve: `gatsby-transformer-sharp`,
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: siteAddress.href.slice(0, -1),
      },
    },
  ],
};
