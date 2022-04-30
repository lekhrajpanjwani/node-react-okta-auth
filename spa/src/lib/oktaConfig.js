const REACT_APP_CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const REACT_APP_OKTA_DOMAIN = process.env.REACT_APP_OKTA_DOMAIN;
const REACT_APP_PORT = process.env.REACT_APP_PORT;

export const oktaConfig = {
  clientId: `0oa4v41iylQIeSPYm5d7`,
  issuer: `https://dev-59276804.okta.com/oauth2/default`,
  redirectUri: `http://localhost:3000/login/callback`, // this makes it so redirects to login if not logged in for secure routes
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
