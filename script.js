//step 1: grab elements & assing them to var
var h4 = document.querySelector("h4");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("grad");
var btnOneColor = document.getElementById("oneColor");
var btnTwoColors = document.getElementById("twoColors");
var h5 = document.querySelector("h5");

//step 2: declare function that will react to the change of input values
function setGrad() {
	body.style.background = "linear-gradient(to right, " + color1.value	+ ", " + color2.value + ")";

	h4.textContent = body.style.background + ";";
	h5.textContent = "";
}

//step 3: addEventListener to inputs, that will recall the funciton
color1.addEventListener("input", setGrad);
color2.addEventListener("input", setGrad);

//step 4: make sure the initial backgroud gradient & colors are displayed on the page
h4.textContent = "linear-gradient(to right, " + color1.value + ", " + color2.value + ");"; 


//step 5: declare function that will change input values + change the gradient background 
function randomTwoColors() {
	color1.value = newHexColor();
	color2.value = newHexColor();
	body.style.background = "linear-gradient(to right, " + color1.value	+ ", " + color2.value + ")";

	h4.textContent = body.style.background + ";";
	h5.textContent = "";
}

//step 6: declare function that will generate random hex color
function newHexColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

//step 7: declare function that will change background color to one color:
function changeColor() {
	var newColor = generateColor();
	body.style.background = newColor;
	h5.textContent = "New CSS Background Color: " + newColor;
	h4.textContent = "One color background selected";
}

//step 8: declare function that will generate random rgb value
function generateColor() {
	var array = [];
	for (var i = 0; i < 3; i++) {
		var number = Math.floor(Math.random() * 256);
		array.push(number);
	} 
	var newRgb = "rgb(" + array[0] + "," + array[1] + "," + array[2] + ")";
	return newRgb;
}

//step 9: add event listener to buttons
btnTwoColors.addEventListener("click", randomTwoColors);
btnOneColor.addEventListener("click", changeColor);