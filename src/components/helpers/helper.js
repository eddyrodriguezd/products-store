const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const addSecondsToDate = (date, seconds) => new Date(date.getTime() + seconds * 1000);

const formatCountDownTimer = (seconds) =>
	'00:'
		.concat(
			Math.floor(seconds / 60) < 10
				? '0'.concat(Math.floor(seconds / 60))
				: Math.floor(seconds / 60)
		)
		.concat(':')
		.concat(
			seconds - 60 * Math.floor(seconds / 60) < 10
				? '0'.concat(seconds - 60 * Math.floor(seconds / 60))
				: seconds - 60 * Math.floor(seconds / 60)
		);

export { getRandomInt, addSecondsToDate, formatCountDownTimer };
