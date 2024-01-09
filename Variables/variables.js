//comentarios de una sola línea

/**
 * esto es
 * un cometarios
 * de varias
 * líneas en JS
 */

//variable numérica
var edadHector = 25;
console.log("La edad de Hector es: " + edadHector);

/**typeof nos ayuda a identificar el tipo de variable a utilizar
 * en la consola del navegador (inspeccionar)*/

let denisseYearOfBirth = 1995;
console.log(denisseYearOfBirth);

let suma = edadHector + denisseYearOfBirth;

//Variables de tipo string, pueden ser con comillas dobles o simples

let postreFavorito = "Helado";

var movieFav = "Star wars";

// Variables de tipo booleano (true/false)

let miNombreEsDenisse = false;

var amIAlive = true;

//Variables de tipo nulo (null)

let datoVacio = null;

let datoVacio1 = "";

// Variables de tipo array

let coleccionDeCoches = ["Porsche", "Mercedes-Benz", "Ferrari", "Nissan"];

let frutas = ["Manzana", "plátano", "Mango"];

let chuches = ["chips moradas", "takis verdes", "huevito kinder", "churritos con salsa"];

let numerosPares = [0, 2, 4, 6, 8, 10];

//Variables de tipo Objeto

let libro = {
    nombre: "el mundo de Sofia",
    editorial: "ABC",
    año: 1990,
    genero: "filosofia",
};

//CONSTANTES

const NOMBRE_USUARIO = "Dafne";


x = 1;
alert ('x =' + x);
var x;

/** 
// var hoisting
var nombre = "Marcus";
console.log(nombre)

if (true){
    var nombre = "Dominic";
    console.log(nombre);
}

 // let scope
console.log(nombre);

var edad = 45;
console.log(edad);

if (true){
    let edad = 40;
    console.log(edad)
}

console.log(edad);
*/

//Conversion de tipos de datos string/number/boolean

let nombre ="Alberto";
let edad = 22;
let condicion = true;

let edadString = String(edad);
let nombreNumerico = Number(nombre);