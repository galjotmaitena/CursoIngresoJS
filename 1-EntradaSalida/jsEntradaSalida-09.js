/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
let sueldo;
let nuevoSueldo;
let aumento;

 /* para calcular el nuevo sueldo deberia sumarle al sueldo original el aumnento.
    El calculo de porcentaje de un valor lo consigo 
    multiplicando el valor por el porcentaje y lodivido por 100.*/

sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
// Utilizamos parseFloat ya que pueden haber centavos, asi lo pasamos a NUMBER.

aumento = sueldo * 10 / 100;
//aumento = sueldo * .1;

nuevoSueldo = sueldo + aumento;

document.getElementById("txtIdResultado").value = nuevoSueldo;

}
