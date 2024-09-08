import { createCookieSessionStorage } from "@remix-run/node";

if (!process.env.SESSION_SECRET) throw new Error("Missing SESSION_SECRET");

const { getSession, commitSession, destroySession } =
	createCookieSessionStorage({
		cookie: {
			name: "__session",
			sameSite: "lax",
			path: "/",
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			secrets: [process.env.SESSION_SECRET],
		},
	});

export { getSession, commitSession, destroySession };
