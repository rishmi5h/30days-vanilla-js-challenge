const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function hourIn12(hours) {
  if (hours > 12) {
    return hours - 12;
  }
  return hours;
}

function setData() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secInDeg = seconds * 6 + 90;
  secondHand.style.transform = `rotate(${secInDeg}deg)`;

  const minutes = now.getMinutes();
  const minInDeg = minutes * 6 + 90;
  minuteHand.style.transform = `rotate(${minInDeg}deg)`;

  const hours = now.getHours();
  const hourInDeg = hourIn12(hours) * 30 + 90;
  hourHand.style.transform = `rotate(${hourInDeg}deg)`;
}

setInterval(setData, 1000);
