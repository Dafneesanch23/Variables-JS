/**  Declarar 10 variables de cada tipo de dato sin tomar en cuenta objetos, arrays y null
 * Pueden variar entre las palabras reservadas var, let y const
 *      -number
 *      -string
 *      -boolean
 */

console.log("Ejercicio 1")
//Number
var edadDafne = 27;
let hermanosDafne = 4;
const ANIO_NACIMIENTODAF = 1996;
let mascotasDafne = 0;
var librosLeidos2024 = 0;
let mascotasSilvia = 2;
const ANIO_NACIMIENTOMARIO = 2003;
const ANIO_ACTUAL = 2024;
const MES_ACTUAL = 1;
const MES_NACIMIENTODAF= 3;

console.log ("Variables tipo number: ")
console.log ([edadDafne, hermanosDafne, ANIO_NACIMIENTODAF, mascotasDafne, librosLeidos2024, mascotasSilvia, ANIO_NACIMIENTOMARIO, ANIO_ACTUAL, MES_ACTUAL, MES_NACIMIENTODAF])

//String
let mesCumpleDafne = "Marzo ";
const NOMBRE_USUARIO = "Dafne ";
var lugarNacimientoDafne = "Jalisco ";
let comidaFavDafne = "lasana ";
const APELLIDO_USUARIO = "Sanchez ";
var peliFavDafne = "El viaje de chihiro ";
let bandaFavDafne = "Arti monki ";
var hobbieDafne = "Ir a conciertos ";
let lugarFavoritoDafne = "La playa ";
var segundoNombreDafne = "Berenice ";


console.log ("Variables tipo string: ")
console.log ([mesCumpleDafne, NOMBRE_USUARIO, lugarNacimientoDafne, comidaFavDafne, APELLIDO_USUARIO, peliFavDafne, bandaFavDafne, hobbieDafne, lugarFavoritoDafne, segundoNombreDafne])

//Boolean
let miNombreEsDafne = true;
var soyDeJalisco = true;
let soyHombre = false;
var lasanaComidaFav = true;
let segundoNombreEsBerenice = true;
var meGustanLasMascotas = true;
let soyHumano = true;
var soyUnRobot = false; 
let soyMexicana = true;
var soyUnGato = false;

console.log("Variables tipo boolean: ")
console.log([miNombreEsDafne, soyDeJalisco, soyHombre, lasanaComidaFav, segundoNombreEsBerenice, meGustanLasMascotas, soyHumano, soyUnRobot, soyMexicana, soyUnGato])

/**
 * Declarar variables numericas y realizar las operaciones aritmeticas basicas
 *      -suma
 *      -resta
 *      -multiplicacion
 *      -division
 */

console.log ("Ejercicio 2");
var edadDafne = 27;
let edadMario = 20;
var edadValentina = 8;
let edadSilvia = 49;
var edadMaki = 3;

let suma = edadDafne + edadMario + edadMaki;
console.log ("Resultado de suma: " + suma);

let resta = edadValentina - edadSilvia;
console.log ("Resultado de resta: " + resta);

let multiplicacion = edadMaki * edadMario;
console.log ("Resultado de multiplicacion: " + multiplicacion);

let division = edadMario/ edadMaki; 
console.log ("Resultado de division: " + division);


 /** Declarar variables que concatenen cadenas de texto
 *      -5 mensajes diferentes en pantalla, sin limite de palabras.
 */
 console.log ("Ejercicio 3");

 let saludoBienvenida = "Hola humano ";
 var primerPregunta = "¿como estas? ";
 let segundoComentario = "Yo estoy bien ";
 var tercerComentario = "gracias por preguntar ";
 let segundaPregunta = "¿quieres ser mi amigo? ";
 var emojitriste = ":( ";
 let emojifeliz = ":) ";
 var porFavor = "pls ";
 let cuartoComentario = "mi pelicula favorita es "
 var despedida = "nos vemos ";

let mensaje1 = saludoBienvenida + primerPregunta;
console.log (mensaje1);

let mensaje2 = segundoComentario + tercerComentario;
console.log (mensaje2);

let mensaje3 = segundaPregunta + emojitriste + porFavor;
console.log (mensaje3);

let mensaje4 = cuartoComentario + peliFavDafne + emojifeliz;
console.log (mensaje4);

let mensaje5 = despedida + emojifeliz;
console.log (mensaje5);


console.log ("Ejercicio 4");
 // Declarar 5 variables y convertirlas a otro tipo de dato
  
/** Para este ejercicio se toman variables ya declaradas arriba
let edadMario = 20;
*/

let edadMarioString = String (edadMario);
console.log (edadMarioString);

let miNombreEsDafneNumber = Number (miNombreEsDafne);
console.log (miNombreEsDafneNumber);

let edadMakiString = String(edadMaki);
console.log (edadMakiString);

let soyUnrobotNumber = Number (soyUnRobot);
console.log (soyUnrobotNumber);

let edadSilviaBoolean = Boolean (edadSilvia);
console.log (edadSilviaBoolean);
 
 /**  CONSIDERACIONES: poner en practica las mejores practicas para declaracion de variables.
 * Imprimir los resultados en pantalla con un console.log()
 */