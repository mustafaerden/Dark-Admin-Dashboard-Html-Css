const clockDesigns = ["clock", "clock2", "clock3", "clock4", "clock5"];
const maxLength = clockDesigns.length;
let startIndex = 0;

const clock = document.querySelector(".clock");
clock.style.background = "url('images/clock5.png')";
clock.style.backgroundSize = "cover";

function changeClock() {
  startIndex++;
  if (startIndex === maxLength) {
    startIndex = 0;
  }
  clock.style.background = `url('images/${clockDesigns[startIndex]}.png')`;
  clock.style.backgroundSize = "cover";
}

const deg = 6;
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hour.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  minute.style.transform = `rotateZ(${mm}deg)`;
  second.style.transform = `rotateZ(${ss}deg)`;
});
