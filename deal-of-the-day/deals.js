
let hourHeading = document.getElementById("hour");
let minHeading = document.getElementById("minute");
let secHeading = document.getElementById("second");


let hour = 0;
let minute = 0;
let seconds = 0;

setInterval(() => {
	secHeading.innerText = seconds.toString().padStart(2, '0');
	seconds++;
	if (seconds == 60) {
		setTimeout(() => {
			minHeading.innerText = minute.toString().padStart(2, '0');
		}, 900)

		minute++
		seconds = 0;
	}
	if (minute == 60) {
		hourHeading.innerText = hour.toString().padStart(2, '0');
		hour++;
		minute = 0;
	}
	if (hour == 24) {
		hour = 0;
	}
}, 1000);


