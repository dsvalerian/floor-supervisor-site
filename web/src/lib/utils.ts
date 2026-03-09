export const formatSeconds = (seconds?: number, placeholder: boolean = true) => {
	if (!seconds && placeholder) {
		return "-:--";
	} else if (!seconds) {
		return "0:00";
	}

	const mins = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60)
		.toString()
		.padStart(2, "0");
	return `${mins}:${secs}`;
};
