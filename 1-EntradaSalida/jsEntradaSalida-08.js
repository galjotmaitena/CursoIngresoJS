/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
let dividendo;
let divisor;
let resto;

dividendo = parseInt(document.getElementById("txtIdNumeroDividendo").value);
divisor = parseInt(document.getElementById("txtIdNumeroDivisor").value);

resto = dividendo % divisor;

alert ("El resto es " + resto +".");
}
/* 
let x = 40;
let y = 20;
let z = 10;

let resultado;

resultado = ((x + y) / y) * z;   

alert(resultado);

El () tiene la MAYOR prioridad.
La /, la * y el % tienen mas prioridad que la + y la -. 
Cuando tengo operadores que tienen la misma prioridad se arranca de izquierda a derecha.
No importa si es un operador o el otro. 
Si quisiera realizar una antes que otra utilizamos los (), 
los cuales tienen la maxima prioridad*/