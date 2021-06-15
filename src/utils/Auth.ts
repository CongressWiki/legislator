import auth0 from 'auth0-js';
import { navigate } from 'gatsby-link';
import { isBrowser } from '../constants';
import {
  AUTH0_DOMAIN,
  AUTH0_CLIENT_ID,
  AUTH0_CALLBACK_URL,
  AUTH0_AUDIENCE,
} from '@constants';

class Auth {
  auth0: auth0.WebAuth | null;
  accessToken = '';
  idToken = '';
  expiresAt = 0;
  userProfile: Record<string, any> = {};

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getAccessToken = this.getAccessToken.bind(this);
    this.getIdToken = this.getIdToken.bind(this);

    this.auth0 = isBrowser
      ? new auth0.WebAuth({
          domain: AUTH0_DOMAIN,
          clientID: AUTH0_CLIENT_ID,
          redirectUri: AUTH0_CALLBACK_URL,
          audience: AUTH0_AUDIENCE,
          responseType: 'token id_token',
          scope: 'openid profile email',
        })
      : null;
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
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (error) {
        navigate('/');
        console.log(error);
        alert(`Error: ${error.error}. Check the console for further details.`);
      }
    });
  }

  getAccessToken() {
    if (!isBrowser || !this.auth0) {
      return;
    }

    return this.accessToken;
  }

  getIdToken() {
    if (!isBrowser || !this.auth0) {
      return;
    }

    return this.idToken;
  }

  setSession(authResult: Record<string, any>) {
    if (!isBrowser || !this.auth0) {
      return;
    }

    // Set isLoggedIn flag in localStorage
    localStorage.setItem('isLoggedIn', 'true');

    // Set the time that the access token will expire at
    const expiresAt = authResult.expiresIn * 1000 + Date.now();
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = expiresAt;

    this.auth0.client.userInfo(this.accessToken, (error, profile) => {
      if (profile) {
        this.userProfile = profile;
      }

      // Navigate to the home route
      navigate('/');
    });
  }

  logout() {
    if (!this.auth0) {
      return;
    }

    // Remove tokens and expiry time
    this.accessToken = '';
    this.idToken = '';
    this.expiresAt = 0;
    this.userProfile = {};

    // Remove isLoggedIn flag from localStorage
    localStorage.removeItem('isLoggedIn');

    // Navigate to the home route
    const { protocol, host } = window.location;
    const returnTo = `${protocol}//${host}`;

    this.auth0.logout({ returnTo });
  }

  isAuthenticated() {
    if (!isBrowser) {
      return;
    }

    // Check whether the current time is past the
    // access token's expiry time
    const { expiresAt } = this;
    return Date.now() < expiresAt;
  }

  getUser() {
    return this.userProfile;
  }

  getUserName() {
    if (this.getUser()) {
      return this.getUser().name;
    }
  }
}

const auth = new Auth();
export default auth;
