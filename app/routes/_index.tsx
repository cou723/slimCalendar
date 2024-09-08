import { GoogleCalendarEvent } from "@/types/googleCalendarEvent";
import { checkAccessToken } from "@/utils/checkAccessToken";
import { oauth2Client } from "@/utils/oauthClient";
import { getSession } from "@/utils/session";
import { type MetaFunction, json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { add } from "date-fns";
import { type calendar_v3, google } from "googleapis";
import { DayCalendar } from "./_components/dayCalendar";
export function getOAuthClient(accessToken: string) {
	oauth2Client.setCredentials({
		access_token: accessToken,
		scope: "https://www.googleapis.com/auth/calendar.events.readonly",
	});
	return oauth2Client;
}

export const loader = async ({ request }: { request: Request }) => {
	const session = await getSession(request.headers.get("Cookie"));
	const accessToken = session.get("accessToken");
	if (!(await checkAccessToken(accessToken))) {
		console.log("hoge");
		return redirect("/login");
	}

	const calendars = google.calendar({
		version: "v3",
		auth: oauth2Client,
	});

	const ids = [
		"6cm3jsuvlmq0jkvml9bd5l272k@group.calendar.google.com",
		"yuuki.java@gmail.com",
	];

	const result = (
		await Promise.all(ids.map((id) => getTodayEvents(calendars, id)))
	).flatMap((events) => events.items);

	return json(result);
};

async function getTodayEvents(
	calendar: calendar_v3.Calendar,
	calendarId: string,
): Promise<calendar_v3.Schema$Events> {
	const today = new Date("2024-9-7");
	return (
		await calendar.events.list({
			calendarId: calendarId,
			timeMin: today.toISOString(),
			timeMax: add(today, { days: 1 }).toISOString(),
		})
	).data;
}

export const meta: MetaFunction = () => {
	return [
		{ title: "Slim Google Calendar" },
		{ name: "description", content: "A slim Google Calendar" },
	];
};

export default function Index() {
	console.log("index");
	const schedules = useLoaderData<typeof loader>();
	return (
		<div>
			<DayCalendar
				events={schedules
					.filter((e) => e !== undefined)
					.map((e) => new GoogleCalendarEvent(e))}
			/>
		</div>
	);
}
