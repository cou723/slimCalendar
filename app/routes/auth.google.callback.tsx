import { oauth2Client } from "@/utils/oauthClient";
import { commitSession, getSession } from "@/utils/session";
import { type LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
	const url = new URL(request.url);
	const code = url.searchParams.get("code");

	if (!code) {
		throw new Error("No code found in the query string");
	}

	const { tokens } = await oauth2Client.getToken(code);
	oauth2Client.setCredentials(tokens);

	// セッションを取得
	const session = await getSession(request.headers.get("Cookie"));

	// トークンをセッションに保存
	session.set("accessToken", tokens.access_token);
	session.set("refreshToken", tokens.refresh_token);

	return redirect("/", {
		headers: {
			"Set-Cookie": await commitSession(session),
		},
	});
};

export default function Callback() {
	return (
		<div>
			<h1>認証中...</h1>
		</div>
	);
}
