const { createHandler } = require('netlify-cms-oauth-provider-node');

module.exports = createHandler({
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
});
