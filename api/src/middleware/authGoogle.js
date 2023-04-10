require('dotenv').config();

const { google } = require('googleapis');

const clientId = process.env.CLIENT_ID;

const clientSecret = process.env.CLIENT_SECRET;

const redirectUri = process.env.REDIRECT_URI;

const oauth2Client = new google.auth.OAuth2(
  clientId,
  clientSecret,
  redirectUri
);

module.exports = { oauth2Client };
