//alert ("hi")

/**Control de flujo (if else)
 * 
 * Pasos para declarar una estructura is else
 * 
 * 1. Palabra reservada (if)
 * 2. Establecer una condición dentro de ()
 * 3. Delimitar el bloque que se ejecuta si la condición se cumple
 * 
 */


// let n = 25;
//Condición que evalue si un numero "n" es mayor que 10

/**if (n>10){
    console.log("El numero es mayor a 10")
} else {
    console.log("El numero no es mayor a 10")
}*/

//Condición que evalua si 'n' es mayor que 10 y menor que 20

// if (n>10 && n<20){
//     console.log("El numero es mayor a 10 y menor a 20")
// } else {
//     console.log("El numero no es mayor a 10 ni menor a 20")
// }

// Si mi condición es mayor a 10 y menor a 20 - check
// Si mi concición es mayor que 10 y mayor que 20 - check
// Si mi número es igual a 10 - check
// Si mi número es igual a 20- check
// Si mi número no es mayor que 10 ni menor que 20

// if (n>10 && n<20){
//     console.log("El numero es mayor a 10 y menor a 20")
// } else if (n>20){
//     console.log ("El numero es mayor a 10 y mayor que 20")
// } else if (n === 10){
//     console.log ("El numero es igual a 10")
// } else if (n === 20){
//     console.log ("El numero es igual a 20")
// } else {
//     console.log ("El numero no se encuentra dentro del rango")
// }


// Operador ternario
// Versión compacta de if esle

/** Declaración de un operador ternario
 * 
 * 1. Utilizar cualquier palabra reservada para una variable ejem "let"
 * 2. Asignar un nombre
 * 3. Asignar valor "=" 
 * 4. Establecer una condición
 * 
 */

// let calificacion = 7;

//Operador que me permita evaluar si una calificacion es aprobatoria

//  let evaluarCalificacion = calificacion >= 7 ? "Aprobado":"Reprobado";
//  console.log (evaluarCalificacion);

// if (calificacion >= 7){
//     console.log("Aprobado")
// } else {
//     console.log("Reprobado")
// }

//SWITCH

/**
 * 1. Palabra reservada switch-case
 * 2. Abrimos un paréntesis (caso)
 * 3. Abrir llaves {} que delimiten mi bloque de código
 * 
 */


function adivinarColor(color){
switch(color.toLowerCase()){
    case "rojo":
        console.log ("Tu color es rojo")
    break;

    case "verde":
        console.log ("Tu color es verde")
    break;

    case "azul":
        console.log ("Tu color es azul")
    break;

    default:
        console.log("No conozco ese color")

}
   
}

//Realizar una funcion que evalue si un numero es par o impar
// Condicionales if-else y funciones
/**
 *  / cociente
 *  % modulo o residuo
 * 
 */

function parImpar (numero){
    if(numero%2 === 0){
        console.log (`El numero ${numero} es par`)
    } else {
        console.log(`El numero ${numero} es impar`)

    }
}