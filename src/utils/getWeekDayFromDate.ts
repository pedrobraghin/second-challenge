export function getWeekDayFromDate(date: Date): string {
	return date
		.toLocaleString('en-us', {
			weekday: 'long',
		})
		.toLowerCase();
}
