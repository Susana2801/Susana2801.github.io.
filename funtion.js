	
	/**console.log("hola mundo"); 

	*let numero1=3;
	*let numero2=4;
	*let resultado = numero1+numero2;

	*console.log("la suma del numero 1 más el numero 2 es" +resultado)
	*/
/**
document.getElementById("boton").onclick= function () {
	console.log ("capturamos el evento click");
	document.getElementById("demo").innerHTML = "probando projecto";
}
*/
document.addEventListener("click", function() {
	console.log("hola mundo desde addEventListener");
	document.getElementById("demo").innerHTML = "probando projecto";
});

document.getElementById("boton_color").addEventListener("click", function(){
	document.body.style.backgroundColor = "#FF0000";
}); 

document.getElementById("boton_default").addEventListener("click", function(){
	document.body.style.backgroundColor = "blue";
}); 

document.getElementById("boton_ocultar").addEventListener("click", function(){
	document.getElementById("demo").style.display = "none";
}); 

const collection = document.getElementByClassName("prueba");
for (let i = 0; i < collection.length; i++) {
	collection[i].style.backgroundColor= "green";
}