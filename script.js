var css = document.querySelector('h3');
var color1 = document.getElementById('button1');
var color2 = document.getElementById('button2');
var body = document.getElementsByTagName('body')[0];
var random = document.getElementsByTagName('button')[0];

var rgbToHex = function (rgb) { 
  var hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

var fullColorHex = function(r,g,b) {   
  var red = rgbToHex(r);
  var green = rgbToHex(g);
  var blue = rgbToHex(b);
  return red+green+blue;
};

function setGradient() {
	body.style.background =
	"linear-gradient(to right, "
	+ color1.value 
	+" , "
	+ color2.value 
	+")";

	css.textContent = body.style.background +";";	
}

function randomNumber() {
	number = Math.floor(Math.random() * 256);
	return number;
}
function generateRandomColour() {
	randomcolor = "#"
	+fullColorHex(randomNumber(),randomNumber(),randomNumber());
	return randomcolor;
}

function setRandomColour() {
	color1.value = generateRandomColour();
	color2.value = generateRandomColour();
	setGradient();
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", setRandomColour);