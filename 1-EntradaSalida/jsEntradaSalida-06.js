/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let num1;
	let num2;
	let resultado;

 /*num1 = document.getElementById("txtIdNumeroUno").value;
   num1 = parseInt(num1);

   num2 = document.getElementById("txtIdNumeroDos").value;
   num2 = parseInt(num2);*/

   num1 = parseInt(document.getElementById("txtIdNumeroUno").value);

   num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
   resultado = num1 + num2;

	alert("La suma es " + resultado);
}

 /*parseInt convierte algo de tipo STRING a NUMBER.
   parseInt, si capta letras, puntos, va a ser NaN.
   parseFloat, capta puntos sin ningun problema. */