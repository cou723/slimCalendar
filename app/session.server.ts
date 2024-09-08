import { createCookieSessionStorage } from "@remix-run/node";

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
	throw new Error("SESSION_SECRETを設定してください。");
}

export const sessionStorage = createCookieSessionStorage({
	cookie: {
		name: "auth_session",
		sameSite: "lax",
		path: "/",
		httpOnly: true,
		secrets: [sessionSecret],
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 60 * 24,
	},
});
