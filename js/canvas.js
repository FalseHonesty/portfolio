var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.rect(0, 0, 200, 100);
ctx.fillStyle = "red";
ctx.fill();

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineWidth = 10;
ctx.strokeStyle = "#FFFFFF";
ctx.lineTo(200, 100);
ctx.stroke();