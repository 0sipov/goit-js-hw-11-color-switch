import colors from "./colors.js";
import refs from "./refs.js";
const { buttonStartRef, buttonStopRef, bodyRef } = refs;

buttonStartRef.addEventListener("click", startSvitchColor);
buttonStopRef.addEventListener("click", stopSvitchColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
function svitchColor() {
  bodyRef.style.cssText = `background-color: ${
    colors[randomIntegerFromInterval(0, colors.length - 1)]
  };`;
}

function startSvitchColor() {
  setInterval(svitchColor, 1000);
}
function stopSvitchColor() {
  clearInterval();
}
console.dir(startSvitchColor);
