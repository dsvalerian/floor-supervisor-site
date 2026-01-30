import dayjs from "dayjs";

const removeLeadingZeros = (num: string) => {
	while (num.startsWith("0")) num = num.substring(1);
	return num;
};

export const formatSeconds = (
	seconds?: number,
	placeholder: boolean = true,
) => {
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

export const formatIsoDate = (dateString: string) => {
	return dayjs(dateString).format("MMM D");
};

export const formatTime = (timeString: string) => {
	const [time, am] = timeString.split(" ");
	const [hour, minute] = time.split(":");

	return (
		removeLeadingZeros(hour) +
		((minute !== "00" && `:${minute}`) || "") +
		" " +
		am.toUpperCase()
	);
};
