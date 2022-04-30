import OktaJwtVerifier from '@okta/jwt-verifier';

const OKTA_DOMAIN = process.env.OKTA_DOMAIN as string;
const AUTH_SERVER_ID = process.env.AUTH_SERVER_ID as string;

export const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `https://dev-59276804.okta.com/oauth2/default`, // required
});
