/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
let nombre;
let edad;

nombre = document.getElementById("txtIdNombre").value;

edad = parseInt(document.getElementById("txtIdEdad").value);

alert("Usted se llama " + nombre + " y tiene " + edad + " años");
// + sirve para armar una frase usando tanto texto literal como variables. 
//alert(`Usted se llama ${nombre} y tiene ${edad} años`) 

}

