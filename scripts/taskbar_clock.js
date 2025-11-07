const time = document.getElementById("hour");
let hour = 0;
let minutes = 0;
let identifier = "AM";

function updateClock() {
  minutes++;

  if (minutes >= 60) {
    minutes = 0;
    hour++;
  }

  if (hour >= 12) {
    hour = 0;
    identifier = identifier === "PM" ? "AM" : "PM";
  }

  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");

  time.textContent = `${formattedHour}:${formattedMinutes} ${identifier}`;
}

time.textContent = "00:00 AM";

setInterval(updateClock, 1000);
