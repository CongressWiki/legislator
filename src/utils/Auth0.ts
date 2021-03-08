import auth0 from 'auth0-js';
import type { WebAuth, Auth0DecodedHash } from 'auth0-js';
import { navigate } from 'gatsby-link';
import {
  isBrowser,
  authDomain,
  authClientId,
  authCallbackUrl,
  authAudience,
} from '@constants';
// import useLocalStorage from '@utils/useLocalStorage';
// const [isLoggedIn, setIsLoggedIn] = useLocalStorage('isLoggedIn', 'false');

class Auth {
  accessToken?: string;
  idToken?: string;
  expiresAt?: number;
  sub?: string;
  auth0?: WebAuth;
  userProfile?: any;

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.renewSession = this.renewSession.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);
    this.getSub = this.getSub.bind(this);
    this.getUser = this.getUser.bind(this);
    // this.getUserName = this.getUserName.bind(this);

    if (isBrowser) {
      this.auth0 = new auth0.WebAuth({
        domain: authDomain,
        clientID: authClientId,
        redirectUri: authCallbackUrl,
        audience: authAudience,
        responseType: 'token id_token',
        scope: 'openid profile email',
      });
    }
  }

  login() {
    if (!isBrowser || !this.auth0) {
      return;
    }

    this.auth0.authorize();
  }

  handleAuthentication() {
    if (!isBrowser || !this.auth0) {
      return;
    }

    this.auth0.parseHash((error, authResult) => {
      if (error) {
        navigate('/');
        console.error(error);
      }

      if (!authResult) {
        console.error(
          `Auth0 returned "authResult" as ${authResult}. Expected Auth0DecodedHash properties.`
        );
        return;
      }

      if (
        !(authResult.expiresIn && authResult.accessToken && authResult.idToken)
      ) {
        console.error('Missing required properties in `authResult`');
        return;
      }

      // TODO: Remove "as" type override
      this.setSession(authResult as Required<Auth0DecodedHash>);
    });
  }

  setSession(authResult: Required<Auth0DecodedHash>) {
    if (!isBrowser || !this.auth0) {
      return;
    }

    // Set isLoggedIn flag in localStorage
    // setIsLoggedIn('true');

    // Set the time that the access token will expire at
    const expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;
    this.sub = authResult.idTokenPayload.sub;

    this.auth0.client.userInfo(this.accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }

      // Navigate to the home route
      navigate('/');
    });
  }

  isAuthenticated() {
    if (!isBrowser) {
      return;
    }

    // Check whether the current time is past the
    // access token's expiry time
    const expiresAt = this.expiresAt || 0;
    return new Date().getTime() < expiresAt;
  }

  getAccessToken() {
    if (!isBrowser) {
      return;
    }

    return this.accessToken;
  }

  getIdToken() {
    if (!isBrowser) {
      return;
    }

    return this.idToken;
  }

  getSub() {
    return this.sub;
  }

  getUser() {
    return this.userProfile;
  }

  getUserName() {
    if (this.getUser()) {
      return this.getUser().name;
    }
  }

  renewSession() {
    const _this = this;

    if (!_this.auth0) {
      console.error(
        'Error when attempting to renew session. `_this` does not have expected property `auth0'
      );
      return;
    }
    return new Promise((resolve, reject) => {
      // TODO: Remove `as` type override
      (_this.auth0 as auth0.WebAuth).checkSession({}, (err, authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          _this.setSession(authResult);
          resolve(authResult);
        } else if (err) {
          _this.logout();
          reject(err);
        }
      });
    });
  }

  logout() {
    if (!isBrowser || !this.auth0) {
      return;
    }

    // Remove tokens and expiry time
    this.accessToken = '';
    this.idToken = '';
    this.expiresAt = 0;
    this.userProfile = null;

    // Remove isLoggedIn flag from localStorage
    // setIsLoggedIn('false');

    // Navigate to the home route
    const { protocol, host } = window.location;
    const returnTo = `${protocol}//${host}`;

    this.auth0.logout({ returnTo });
  }
}

const auth = new Auth();
export default auth;
