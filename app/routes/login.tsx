import { oauth2Client } from "@/utils/oauthClient";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
	const scopes = ["https://www.googleapis.com/auth/calendar.readonly"];

	return oauth2Client.generateAuthUrl({
		access_type: "offline",
		scope: scopes,
	});
}

export default function Login() {
	const authUrl = useLoaderData<typeof loader>();

	return <a href={authUrl}>サインイン</a>;
}
