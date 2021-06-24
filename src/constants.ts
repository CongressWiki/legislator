// if (process.env.NODE_ENV !== 'production') {
//   require('dotenv').config({
//     path: `.env.${process.env.NODE_ENV}`,
//   });
// }

// Styles
export const COLORS = {
  // Text
  text: {
    light: 'hsl(0, 0%, 10%)',
    dark: 'hsl(0, 0%, 100%)',
  },
  dimText: {
    light: 'hsl(0, 0%, 7%)',
    dark: 'hsl(0, 0%, 70%)',
  },
  // Backgrounds
  background: {
    light: 'hsl(105, 20%, 96%)',
    dark: 'hsl(215, 51%, 10%)',
  },
  paper: {
    light: 'hsl(105, 20%, 95%)',
    dark: 'hsl(215, 51%, 11%)',
  },
  // Theme
  primary: {
    light: 'hsl(355, 78%, 56%)',
    dark: 'hsl(45, 81%, 53%)',
  },
  secondary: {
    light: 'hsl(355, 78%, 56%)',
    dark: 'hsl(355, 78%, 56%)',
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray300: {
    light: 'hsl(0, 0%, 70%)',
    dark: 'hsl(0, 0%, 30%)',
  },
  gray500: {
    light: 'hsl(0, 0%, 50%)',
    dark: 'hsl(0, 0%, 50%)',
  },
  gray700: {
    light: 'hsl(0, 0%, 30%)',
    dark: 'hsl(0, 0%, 70%)',
  },
  // Bill specific
  bill: {
    light: 'hsl(37, 60%, 81%)',
    dark: 'hsl(35, 1%, 20%)',
  },
  billGradient1: {
    light: 'hsl(36, 100%, 60%)',
    dark: 'hsl(40, 70%, 10%)',
  },
  billGradient2: {
    light: 'hsl(36, 70%, 80%)',
    dark: 'hsl(40, 1%, 20%)',
  },
  // Misc components
  ribbon: {
    light: 'hsl(105, 30%, 97%)',
    dark: 'hsl(215, 51%, 14%)',
  },
  ribbonCard: {
    light: 'hsl(105, 30%, 98%)',
    dark: 'hsl(215, 70%, 14%)',
  },
  gold: {
    light: 'hsl(45, 81%, 53%)',
    dark: 'hsl(45, 81%, 53%)',
  },
  // Stamp
  stamp: {
    light: 'hsl(133, 84%, 30%)',
    dark: 'hsl(133, 84%, 30%)',
  },
  // Party
  democratBlue: {
    light: 'hsl(200,80%, 53%)',
    dark: 'hsl(200, 80%, 43%)',
  },
  republicanRed: {
    light: 'hsl(2, 80%, 53%)',
    dark: 'hsl(4, 80%, 43%)',
  },
  independentGreen: {
    light: 'hsl(114, 80%, 53%)',
    dark: 'hsl(114, 80%, 43%)',
  },
  // Decisions / Status
  yeaGreen: {
    light: 'hsl(130, 100%, 37%)',
    dark: 'hsl(133, 84%, 41%)',
  },
  nayRed: {
    light: 'hsl(5, 96%, 51%)',
    dark: 'hsl(5, 96%, 41%)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

export const PARTY_COLORS = {
  Democrat: 'var(--color-democratBlue)',
  Republican: 'var(--color-republicanRed)',
  Independent: 'var(--color-independentGreen)',
};

export const getPartyColors = (party: string) => {
  switch (party.toLowerCase()) {
    case 'democrat':
      return 'var(--color-democratBlue)';
    case 'republican':
      return 'var(--color-republicanRed)';
    case 'independent':
      return 'var(--color-independentGreen)';
    default:
      return 'var(--color-gray300)';
  }
};

// Window
export const isBrowser = typeof window !== 'undefined';

// Env variables //

// AUTH0_DOMAIN
if (!process.env.GATSBY_AUTH0_DOMAIN)
  throw new Error('Missing environment var: `GATSBY_AUTH0_DOMAIN`');
export const AUTH0_DOMAIN = process.env.GATSBY_AUTH0_DOMAIN;

// AUTH0_CLIENT_ID
if (!process.env.GATSBY_AUTH0_CLIENT_ID)
  throw new Error('Missing environment var: `GATSBY_AUTH0_CLIENT_ID`');
export const AUTH0_CLIENT_ID = process.env.GATSBY_AUTH0_CLIENT_ID;

// AUTH0_CALLBACK_URL
if (!process.env.GATSBY_AUTH0_CALLBACK_URL)
  throw new Error('Missing environment var: `GATSBY_AUTH0_CALLBACK_URL`');
export const AUTH0_CALLBACK_URL = process.env.GATSBY_AUTH0_CALLBACK_URL;

// AUTH0_AUDIENCE
if (!process.env.GATSBY_AUTH0_AUDIENCE)
  throw new Error('Missing environment var: `GATSBY_AUTH0_AUDIENCE`');
export const AUTH0_AUDIENCE = process.env.GATSBY_AUTH0_AUDIENCE;

// AUTH0_LOGOUT_URL
if (!process.env.GATSBY_AUTH0_LOGOUT_URL)
  throw new Error('Missing environment var: `GATSBY_AUTH0_LOGOUT_URL`');
export const AUTH0_LOGOUT_URL = process.env.GATSBY_AUTH0_LOGOUT_URL;

// HASURA_GRAPHQL_URL
if (!process.env.GATSBY_HASURA_GRAPHQL_URL)
  throw new Error('Missing environment var: `GATSBY_HASURA_GRAPHQL_URL`');
export const HASURA_GRAPHQL_URL = process.env.GATSBY_HASURA_GRAPHQL_URL;
