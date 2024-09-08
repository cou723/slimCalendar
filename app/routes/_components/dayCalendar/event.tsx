import {
	type GoogleCalendarEvent,
	eventDurationHours,
	startHoursFloat,
} from "@/types/googleCalendarEvent";
import type { FC } from "react";
import { css } from "styled-system/css";

declare module "react" {
	interface CSSProperties {
		"--event-height"?: string;
		"--event-top"?: string;
	}
}

type Props = {
	event: GoogleCalendarEvent;
	heightPerHour: number;
};

export const Event: FC<Props> = ({ event: e, heightPerHour }) => {
	const eventHeight = `${eventDurationHours.call(e.event) * heightPerHour}px`;
	const eventTop = `${(startHoursFloat.call(e.event) ?? 0) * heightPerHour}px`;

	console.log(eventHeight, eventTop);

	return (
		<div
			className={css({
				height: "var(--event-height)",
				top: "var(--event-top)",
				position: "absolute",
				border: "1px solid black",
			})}
			style={{
				"--event-height": eventHeight,
				"--event-top": eventTop,
			}}
		>
			{e.event.summary}-{e.event.start?.dateTime}-{e.event.end?.dateTime}
		</div>
	);
};
