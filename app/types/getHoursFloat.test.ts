import { describe, expect, it } from "vitest";
import { getHoursFloat } from "./getHoursFloat";

describe("getHoursFloat", () => {
	it("should return the correct float value for hours and minutes", () => {
		const date = new Date("2023-10-01T14:30:00Z");
		const hoursFloat = getHoursFloat.call(date);
		expect(hoursFloat).toBe(14.5);
	});

	it("should handle edge cases like midnight correctly", () => {
		const date = new Date("2023-10-01T00:00:00Z");
		const hoursFloat = getHoursFloat.call(date);
		expect(hoursFloat).toBe(0);
	});

	it("should handle edge cases like noon correctly", () => {
		const date = new Date("2023-10-01T12:00:00Z");
		const hoursFloat = getHoursFloat.call(date);
		expect(hoursFloat).toBe(12);
	});
});
