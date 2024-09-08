import { describe, expect, it } from "vitest";
import { differenceInHoursFloat } from "./differenceInHoursFloat";

describe("differenceInHoursFloat", () => {
	it("should return the correct difference in hours as a float", () => {
		const start = new Date("2023-10-01T10:00:00Z");
		const end = new Date("2023-10-01T12:30:00Z");
		const result = differenceInHoursFloat(end, start);
		expect(result).toBe(2.5);
	});

	it("should handle cases where the end time is before the start time", () => {
		const start = new Date("2023-10-01T12:00:00Z");
		const end = new Date("2023-10-01T10:00:00Z");
		const result = differenceInHoursFloat(end, start);
		expect(result).toBe(-2);
	});

	it("should return 0 if the start and end times are the same", () => {
		const start = new Date("2023-10-01T10:00:00Z");
		const end = new Date("2023-10-01T10:00:00Z");
		const result = differenceInHoursFloat(end, start);
		expect(result).toBe(0);
	});
});
