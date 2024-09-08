import { google } from "googleapis";

if (
	!(
		process.env.GOOGLE_CLIENT_ID &&
		process.env.GOOGLE_CLIENT_SECRET &&
		process.env.CLIENT_URL
	)
)
	throw new Error("Missing Google Client ID or Secret or Client url");

export const oauth2Client = new google.auth.OAuth2({
	clientId: process.env.GOOGLE_CLIENT_ID,
	clientSecret: process.env.GOOGLE_CLIENT_SECRET,
	redirectUri: `${process.env.CLIENT_URL}/auth/google/callback`,
});
