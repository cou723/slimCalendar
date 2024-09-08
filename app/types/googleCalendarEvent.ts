import { isValidDate } from "@/utils/isValidDate";
import { parseISO } from "date-fns";
import type { calendar_v3 } from "googleapis";
import { differenceInHoursFloat } from "./differenceInHoursFloat";
import { getHoursFloat } from "./getHoursFloat";

export class GoogleCalendarEvent {
	constructor(public readonly event: calendar_v3.Schema$Event) {}

	isAllDayEvent(): boolean {
		if (!this.event.end) return false;
		if (!this.event.end.date) return false;
		return isValidDate(this.event.end.date);
	}

	get start(): Date {
		if (!this.event.start?.dateTime) throw new Error();
		return parseISO(this.event.start.dateTime);
	}
	get end(): Date {
		if (!this.event.end?.dateTime) throw new Error();
		return parseISO(this.event.end.dateTime);
	}
}

export function eventDurationHours(this: calendar_v3.Schema$Event) {
	if (!this.start?.dateTime || !this.end?.dateTime) return 0;
	const start = parseISO(this.start.dateTime);
	const end = parseISO(this.end.dateTime);
	return differenceInHoursFloat(end, start);
}

export function startHoursFloat(
	this: calendar_v3.Schema$Event,
): number | undefined {
	if (!this.start?.dateTime) return undefined;
	return getHoursFloat.call(parseISO(this.start.dateTime));
}
