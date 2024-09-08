import {
	type GoogleCalendarEvent,
	eventDurationHours,
	startHoursFloat,
} from "@/types/googleCalendarEvent";
import { format } from "date-fns";
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
				padding: "4px",
				width: "100%",
				borderRadius: "0.5rem",
				display: "flex",
				flexDirection: "row",
				gap: "0.5rem",
			})}
			style={{
				"--event-height": eventHeight,
				"--event-top": eventTop,
			}}
		>
			<div>{e.event.summary}</div>
			<div>
				{format(e.start, "h:mm")}-{format(e.end, "h:mm")}
			</div>
		</div>
	);
};
