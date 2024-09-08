import { google } from "googleapis";

export async function checkAccessToken(accessToken: string): Promise<boolean> {
	const oauth2Client = new google.auth.OAuth2();
	oauth2Client.setCredentials({ access_token: accessToken });

	try {
		// トークン情報を取得して有効性を確認
		const tokenInfo = await oauth2Client.getTokenInfo(accessToken);
		return tokenInfo.expiry_date > Date.now();
	} catch (error) {
		return false;
	}
}
