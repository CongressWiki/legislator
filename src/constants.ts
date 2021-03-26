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
    light: 'hsl(105, 30%, 96%)',
    dark: 'hsl(215, 51%, 10%)',
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
  switch (party) {
    case 'Democrat':
      return 'var(--color-democratBlue)';
    case 'Republican':
      return 'var(--color-republicanRed)';
    case 'Independent':
      return 'var(--color-independentGreen)';
    default:
      return 'var(--color-gray300)';
  }
};

export const getOriginalChamber = (type: string) => {
  const HOUSE = 'HOUSE';
  const SENATE = 'SENATE';

  switch (type.toLowerCase()) {
    case 's':
    case 'sres':
    case 'sjres':
      return SENATE;
    case 'hr':
    case 'hres':
    case 'hjres':
    default:
      return HOUSE;
  }
};

export const normalizeBillStatus = (
  result: string,
  originalChamber: string
) => {
  switch (result) {
    case 'INTRODUCED':
      return `INTRODUCED IN ${originalChamber}`;
    case 'PASSED':
      return `PASSED`;
    case 'REFERRED':
      return `REFERRED TO COMMITTEES`;
    case 'REPORTED':
      return `COMMITTEE REPORTED TO ${originalChamber}`;
    case 'PROV_KILL:SUSPENSIONFAILED':
      return `FAILED`;
    case 'PROV_KILL:CLOTUREFAILED':
      return `FILIBUSTERED`;
    case 'FAIL:ORIGINATING:HOUSE':
      return `FAILED IN HOUSE`;
    case 'FAIL:ORIGINATING:SENATE':
      return `FAILED IN SENATE`;
    case 'PASSED:SIMPLERES':
      return `PASSED IN ${originalChamber}`;
    case 'PASSED:CONSTAMEND':
      return `PENDING STATE APPROVAL`;
    case 'PASS_OVER:HOUSE':
      return `PASSED IN HOUSE`;
    case 'PASS_OVER:SENATE':
      return `PASSED IN SENATE`;
    case 'PASSED:CONCURRENTRES':
      return `PASSED IN HOUSE AND SENATE`;
    case 'FAIL:SECOND:HOUSE':
      return `FAILED IN HOUSE`;
    case 'FAIL:SECOND:SENATE':
      return `FAILED IN SENATE`;
    case 'PASS_BACK:HOUSE':
      return `AMENDED BY HOUSE`;
    case 'PASS_BACK:SENATE':
      return `AMENDED BY SENATE`;
    case 'PROV_KILL:PINGPONGFAIL':
      return `AMENDMENTS DENIED`;
    case 'PASSED:BILL':
      return `PENDING PRESIDENT SIGNATURE`;
    case 'CONFERENCE:PASSED:HOUSE':
      return `CONFERENCE:PASSED:HOUSE`;
    case 'CONFERENCE:PASSED:SENATE':
      return `CONFERENCE:PASSED:SENATE`;
    case 'ENACTED:SIGNED':
      return `SIGNED BY PRESIDENT`;
    case 'PROV_KILL:VETO':
      return `VETOED BY PRESIDENT`;
    case 'VETOED:POCKET':
      return `PRESIDENT DID NOT SIGN BEFORE CONGRESS ADJOURNED`;
    case 'VETOED:OVERRIDE_FAIL_ORIGINATING:HOUSE':
      return `VETO OVERRIDE FAILED IN HOUSE`;
    case 'VETOED:OVERRIDE_FAIL_ORIGINATING:SENATE':
      return `VETO OVERRIDE FAILED IN SENATE`;
    case 'VETOED:OVERRIDE_PASS_OVER:HOUSE':
      return `VETO OVERRIDE PASSED IN HOUSE`;
    case 'VETOED:OVERRIDE_PASS_OVER:SENATE':
      return `VETO OVERRIDE PASSED IN SENATE`;
    case 'VETOED:OVERRIDE_FAIL_SECOND:HOUSE':
      return `VETO OVERRIDE FAILED IN HOUSE`;
    case 'VETOED:OVERRIDE_FAIL_SECOND:SENATE':
      return `VETO OVERRIDE FAILED IN SENATE`;
    case 'ENACTED:VETO_OVERRIDE':
      return `ENACTED`;
    case 'ENACTED:TENDAYRULE':
      return `ENACTED`;
  }
};

// Window
export const isBrowser = typeof window !== 'undefined';

// Apollo
// const scheme = (proto: string) => {
//   if (!isBrowser) {
//     return proto;
//   }
//   return window.location.protocol === 'https:' ? `${proto}s` : proto;
// };

// const HASURA_GRAPHQL_ENGINE_HOSTNAME = 'usacounts.com';

// export const GRAPHQL_URL = `${scheme(
//   'http'
// )}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

// export const REALTIME_GRAPHQL_URL = `${scheme(
//   'ws'
// )}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1alpha1/graphql`;
