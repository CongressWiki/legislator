// Styles
export const COLORS = {
  text: {
    light: 'hsl(0deg, 0%, 10%)', // White
    dark: 'hsl(0deg, 0%, 100%)', // Near-black
  },
  background: {
    light: 'hsl(105, 55%, 96%)', // Honeydew
    dark: 'hsl(215, 50%, 23%)', // Prussian Blue
  },
  backgroundAlt: {
    light: 'hsl(105, 55%, 99%)', // Honeydew
    dark: 'hsl(215, 50%, 28%)', // Prussian Blue
  },
  primary: {
    light: 'hsl(182, 43%, 76%)', // Powder blue
    dark: 'hsl(203, 39%, 44%)', // Celadon Blue
  },
  primaryAlt: {
    light: 'hsl(203, 39%, 44%)', // Celadon Blue
    dark: 'hsl(182, 43%, 76%)', // Powder Blue
  },
  secondary: {
    light: 'hsl(355, 78%, 56%)', // Imperial Red
    dark: 'hsl(355, 78%, 56%)', // Imperial Red
  },
  secondaryAlt: {
    light: 'hsl(215, 50%, 23%)', // Prussian Blue
    dark: 'hsl(105, 55%, 96%)', // Honeydew
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray300: {
    light: 'hsl(0deg, 0%, 70%)',
    dark: 'hsl(0deg, 0%, 30%)',
  },
  gray500: {
    light: 'hsl(0deg, 0%, 50%)',
    dark: 'hsl(0deg, 0%, 50%)',
  },
  gray700: {
    light: 'hsl(0deg, 0%, 30%)',
    dark: 'hsl(0deg, 0%, 70%)',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

// Window
export const isBrowser = typeof window !== 'undefined';

// Apollo
const scheme = (proto: string) => {
  if (!isBrowser) {
    return proto;
  }
  return window.location.protocol === 'https:' ? `${proto}s` : proto;
};

const HASURA_GRAPHQL_ENGINE_HOSTNAME = 'usacounts.com';

export const GRAPHQL_URL = `${scheme(
  'http'
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1alpha1/graphql`;

export const REALTIME_GRAPHQL_URL = `${scheme(
  'ws'
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1alpha1/graphql`;

export const authClientId = '9phT8e22TlF2r5mDaOOU5bHj8FTHWGji';
export const authDomain = 'usacounts.us.auth0.com';
export const authCallbackUrl = `http://localhost:8000/callback`;
export const authAudience = 'legislator-api';
