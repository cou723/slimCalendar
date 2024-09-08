import { differenceInHours, differenceInMinutes } from "date-fns";

export function differenceInHoursFloat(end: Date, start: Date): number {
	return (
		differenceInHours(end, start) + (differenceInMinutes(end, start) % 60) / 60
	);
}
