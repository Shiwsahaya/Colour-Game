// var colors=[
// "rgb(255, 0, 0)",
// "rgb(255, 255, 0)",
// "rgb(0, 255, 0)",
// "rgb(0, 255, 255)",
// "rgb(0, 0, 255)",
// "rgb(255, 0, 255)"
// ]
var numSquares=6;
var colors=generateRandomColors(numSquares);
var pickedColor=pickColor();
var colorDisplay=document.getElementById("colorDisplay");
colorDisplay.textContent=pickedColor; 
var squares=document.querySelectorAll(".square");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares=3;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
});
hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares=6;
	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
});

reset.addEventListener("click",function(){
	//genrate all new colors
	colors=generateRandomColors(numSquares); 
	//pick a new random color
	pickedColor=pickColor();
	//change color display
	colorDisplay.textContent=pickedColor;

	//change colors squares
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";

});
for(var i=0;i<squares.length;i++)
{
	//add initial color to squares
	squares[i].style.backgroundColor=colors[i];

	//add click listener to squares
	squares[i].addEventListener("click",function(){
		//grab color of clicked square
		var clickedColor=this.style.backgroundColor;
		//compare color to pickedColor

		if(clickedColor===pickedColor)
		{
			messageDisplay.textContent="Correct!";
			reset.textContent="Play Again?";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;

		}
		else
		{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	});
} 
function changeColors(color){
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color; 
	}
}
function generateRandomColors(num){
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b +")";
}

function pickColor() {
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}