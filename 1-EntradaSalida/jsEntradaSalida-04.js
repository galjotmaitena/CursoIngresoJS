/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
let nombre; 
// reservo espacio en la memoria para guardar el nombre de usuario

nombre = prompt ("Ingrese su nombre");
// guardo en la variable nombre el texto que escribio el usuario dentro de la ventana prompt

document.getElementById("txtIdNombre").value = nombre;
// copio el nombre que tengo guardado en la variable nombre dentro de la caja de texto embebida en la pagina html

}

