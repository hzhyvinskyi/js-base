var canvas = document.getElementById('canvas');

var ctx = canvas.getContext('2d');

var gradient = ctx.createRadialGradient(150, 70, 0, 100, 200, 70);

gradient.addColorStop(0, 'Gold');
gradient.addColorStop(1, 'rgba(0, 150, 0, 0)');

ctx.fillStyle = gradient;
ctx.fillRect(0, 0, 600, 300);

ctx.strokeStyle = 'silver';
ctx.strokeRect(150, 75, 50, 50);

ctx.clearRect(0, 0, 300, 150);

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.moveTo(100, 100);
ctx.lineTo(80, 60);
ctx.lineTo(110, 80);
ctx.lineTo(125, 40);
ctx.lineTo(140, 80);
ctx.lineTo(170, 60);
ctx.lineTo(150, 100);
ctx.lineTo(150, 100);
ctx.bezierCurveTo(140, 90, 110, 90, 100, 100);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = 'gold';
ctx.fill();

ctx.beginPath();
ctx.moveTo(150, 0);
ctx.lineTo(195, 130);
ctx.lineTo(80, 50);
ctx.lineTo(220, 50);
ctx.lineTo(105, 130);
ctx.lineTo(150, 0);
ctx.stroke();
ctx.fillStyle = 'red';
ctx.fill('evenodd');

ctx.font = '30px Tahoma';
ctx.textBaseline = 'hanging';
ctx.fillText('Hello', 0, 30);
