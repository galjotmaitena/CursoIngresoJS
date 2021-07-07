/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre; 
	  nombre = document.getElementById("txtIdNombre").value; 
	/*Para referirse al archivo html que me llamo, usamos la palabra document,
	si ponemos document. nos apareceran diferentes funciones que podemos utilizar, 
	en este caso getElementById("Id del archivo html")
	.value para conseguir el valor  de la caja de texto, es decir el texto escrito en la caja;
	este va a ir a parar a la variable nombre*/
	
	// nombre = txtIdNombre.value; 

	/* document.getElementById("txtIdNombre").value= ""; 
	se borra la caja de texto, valor cadena vacia*/

alert(nombre);
}

/* "txtIdNombre" lower camel case
   "Txtidnombre" upper camel case */
