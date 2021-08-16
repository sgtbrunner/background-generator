const css = document.querySelector('h3');
const color1 = document.getElementById('button1');
const color2 = document.getElementById('button2');
const body = document.getElementsByTagName('body')[0];
const random = document.getElementsByTagName('button')[0];

const rgbToHex = (rgb) => {
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) hex = '0' + hex;
  return hex;
};

const fullColorHex = (r, g, b) => {
  const red = rgbToHex(r);
  const green = rgbToHex(g);
  const blue = rgbToHex(b);
  return red + green + blue;
};

const setGradient = () => {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ' , ' + color2.value + ')';

  css.textContent = body.style.background + ';';
};

const randomNumber = () => Math.floor(Math.random() * 256);

const generateRandomColour = () =>
  '#' + fullColorHex(randomNumber(), randomNumber(), randomNumber());

function setRandomColour() {
  color1.value = generateRandomColour();
  color2.value = generateRandomColour();
  setGradient();
}

setGradient();
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
random.addEventListener('click', setRandomColour);
