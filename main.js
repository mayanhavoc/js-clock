const secondHand = document.querySelector(".second-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date(); //grabs the date

  const seconds = now.getSeconds(); //grabs the seconds of the current minute. How do we turn it into a degree?

  //first we need to turn it into something that is base 100 so that 0° = 0% and 360° = 100%

  const secondsDegrees =
    (seconds / 60) /*gives us the percentage*/ *
      360 /* multiplying by 360 creates a full cycle */ +
    90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000); //how do you run something every second? you set an interval that takes as arguments a function and time value, making the function run every 1000 miliseconds, or 1 second.
