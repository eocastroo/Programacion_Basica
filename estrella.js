var d = document.getElementById("Estrellita");
var lienzo = d.getContext("2d");

lienzo.fillStyle = "rgb(255,0,0)";
lienzo.fillRect(20,20,100,100);
function darclick()


for (var l = 0; l<301 ; l+= 15)
{
	lienzo.strokeStyle = "PURPLE";
	Dibujarlinea(l, l+300);
	lienzo.strokeStyle = "GREEN";
	Dibujarlinea(l, 300-l);
	// lienas dibujadas abajo
	lienzo.strokeStyle = "ORANGE";
	Dibujarlinea(600-l, 300-l);
	lienzo.strokeStyle = "BLUE";
	Dibujarlinea(600-l, l+300);
	console.log("lineas" + l);
}

function Dibujarlinea(y, xf)
{
lienzo.beginPath();
lienzo.moveTo(300, y);
lienzo.lineTo(xf, 300);
lienzo.stroke();
lienzo.closePath();
}
