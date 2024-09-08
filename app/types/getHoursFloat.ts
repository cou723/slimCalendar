export function getHoursFloat(this: Date): number {
	return this.getHours() + this.getMinutes() / 60;
}
