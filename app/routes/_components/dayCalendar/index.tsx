import type { GoogleCalendarEvent } from "@/types/googleCalendarEvent";
import type { FC } from "react";
import { css } from "styled-system/css";
// import { useViewportHeight } from "./_hooks/useViewportHeight";
import { Event } from "./event";

// loader関数を定義

type Props = {
	events: GoogleCalendarEvent[];
};

// コンポーネントでデータを使用
export const DayCalendar: FC<Props> = ({ events }) => {
	console.log("day calendar");
	const heightPerHour = 50;
	return (
		<div
			className={css({
				border: "1px solid black",
				height: "99vh",
				position: "relative",
			})}
		>
			{events
				?.filter((event) => !event.isAllDayEvent())
				.map((s) => (
					<Event event={s} key={s.event.id} heightPerHour={heightPerHour} />
				))}
		</div>
	);
};
