/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let num1;
	let num2;
	let resultado;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

    num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
    resultado = num1 + num2;

	alert("La suma es " + resultado);
}

function restar()
{
	let num1;
	let num2;
	let resultado;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

    num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
    resultado = num1 - num2;

  /*alert(typeof resultado);   
	para ver de que tipo es una variable, string o number*/

	alert("La resta es " + resultado);
}

function multiplicar()
{ 
	let num1;
	let num2;
	let resultado;

	num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

    num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
    resultado = num1 * num2;

	alert("La multiplicacion es " + resultado);
}

function dividir()
{
	let num1;
	let num2;
	let resultado;

    num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

    num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
    resultado = num1 / num2;

	alert("La division es " + resultado);
}

 /* Solo el operador aritmetico + tiene un doble uso, 
    para armar una frase usando tanto texto literal como variables o para sumar. 
    El operador - solo tiene un uso, el de restar. 
    Por eso no es necesario usar el parseInt. */
