class Billete {
	constructor(v,c) {
		this.valor = v;
		this.cantidad = c;

	}

}

function tomaTuDinero (){
 var t = document.getElementById("dinero");
 dinero = parseInt(t.value);

 for (var b  of caja) {

 if (dinero > 0) {


	  div = Math.floor(dinero / b.valor);

 if (div > b.cantidad) {

	 papel = b.cantidad;

 }
 else {

 	  papel = div;
 }
 entregado.push(new Billete(b.valor, papel));
 dinero = dinero - (b.valor * papel);

 }

 }
 if (dinero > 0) {

	 resultado.innerHTML ="Soy un cajero pobre y no tengo dinero";

 }
 else {
 	 for (var e of entregado) {
		 if (e.cantidad > 0) {

			resultado.innerHTML = resultado.innerHTML  + e.cantidad + " Billetes de $" + e.valor + "<br/>" ;
		 }


 	 }
 }


}
var caja = [] ;
var entregado = [];
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 20));
caja.push(new Billete(20, 30));
caja.push(new Billete(10, 10));
caja.push(new Billete(5, 5));

var resultado = document.getElementById("resultado");
var d = document.getElementById("extraer");
d.addEventListener("click", tomaTuDinero);

var dinero = 0;
var div = 0;
var papel = 0;
