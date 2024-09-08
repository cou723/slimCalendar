import { google } from "googleapis";

export const oauth2Client = new google.auth.OAuth2({
	clientId: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	redirectUri: `${process.env.CLIENT_URL}/auth/google/callback`,
});
