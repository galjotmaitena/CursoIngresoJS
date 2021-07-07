/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
/* Para declarar la variable lo podemos indicar con var o let*/
let nombre; // declaracion de variable

/* = OPERADOR DE ASIGNACION, 
lo que va a la derecha es el origen y a la izquierda el destino */
/* dato = Maitena 

Le damos un valor a la variable. 
Inicializamos la variable con la cadena Maitena. 

   dato = 20
   
Al indicar el alert, el 20 va a pisar a Maitena, es decir,
se mostrara solo el 20*/

nombre = prompt ("Ingrese su nombre"); 
alert(nombre); //recordar no poner comillas en el parentesis
}

