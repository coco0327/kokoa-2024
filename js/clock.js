const clock = document.querySelector(".status-bar__column:nth-child(2) span");

const printClock = () => {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
  setTimeout(printClock, 1000);
};

window.onload = printClock;
