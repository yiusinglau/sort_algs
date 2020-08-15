//var canvas = document.querySelector('canvas');
var canvas = document.getElementById("myCanvas");
canvas.width = 600;
canvas.height = 400;

var ctx = canvas.getContext('2d');

var numbers = [5,11,14,7,5,8,3,6,1,78,11,15,12,2,8,51, 66,43];
var totalNum = numbers.length;
var w = 600 / totalNum - 5;

var width = Math.floor(w);
var currX = 0;
var base = 200;
					
for (var i = 0; i < numbers.length; i++) {
				
	ctx.fillStyle = 'green';
	var h = 4*numbers[i];
	var y = canvas.height - h;
	ctx.fillRect(currX, y, width, h);						
	currX += width + 5;
}




		
	




			