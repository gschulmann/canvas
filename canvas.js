var canvas = document.getElementById("sweden");
var context = canvas.getContext("2d");
context.beginPath();
context.fillStyle = "#FECC02";
context.fillRect(230, 0, 130, 600);
context.fillRect(0, 235, 800, 130);

var canvas = document.getElementById("france");
var context = canvas.getContext("2d");
context.fillStyle = "#002654";
context.fillRect(0, 0, 266.67, 600);
context.fillStyle = "#ED2939";
context.fillRect(800-266.67, 0, 266.67, 600);

var canvas = document.getElementById("germany");
var context = canvas.getContext("2d");
context.fillStyle = "#000000";
context.fillRect(0, 0, 800, 200);
context.fillStyle = "#FFCC00";
context.fillRect(0, 400, 800, 200)