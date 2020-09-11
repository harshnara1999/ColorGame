var numSquare = 6
var colors = generateRandomColor(6);
var selectedColor = randomColor();

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	h1.style.backgroundColor = "steelblue";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquare = 3;
	colors = generateRandomColor(numSquare);
	selectedColor = randomColor();
	for(var i=0;i<squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	h1.style.backgroundColor = "steelblue";
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquare = 6;
	colors = generateRandomColor(numSquare);
	selectedColor = randomColor();
	for(var i=0;i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block"
	}
})

resetButton.addEventListener("click", function(){
	colors = generateRandomColor(numSquare);
	selectedColor = randomColor();
	colorDisplay.textContent = selectedColor;
	message.textContent="";
	for(var i=0; i<colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	if(resetButton.textContent === "Play Again?"){
		resetButton.textContent = "Change Color";
	}
})
colorDisplay.textContent = selectedColor;
for (var i = 0; i<squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		
		if(clickedColor === selectedColor){
			h1.style.backgroundColor = selectedColor;
			message.textContent =  "Correct!!" ;
			changeColor(selectedColor);
			resetButton.textContent = "Play Again?"
		}
		else{
			message.textContent =  "Wrong!!" ;
			this.style.backgroundColor = "#262626"
		}
	});

}

function changeColor(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function randomColor(){
	var n = Math.floor(Math.random()*colors.length);
	return colors[n];
}

function generateRandomColor(num){
	var arr =[];
	for(var i=0; i<num; i++){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
		arr.push(rgb);
	}
	return arr;
}
