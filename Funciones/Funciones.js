//alert ("200 ok")

/** FUNCIONES
 * 
 * Declaración de funciones
 * 
 * 1. Palabra reservada function
 * 2. Asignar un nombre a nuestra función
 * 3. Colocar paréntesis () y después llaves {}
 */

function miFuncion(){
console.log("Mi primera chamba");

}

//Funcion que salude a quien la mande llamar

function saludarUsuario (nombre){
   // console.log("Hola "+ nombre);
   console.log(`Hola ${nombre}`);

}

//Función que realice la suma de 4 números diferentes

function sumarNumeros(a, b, c, d){
    //return a+b+c+d;
    return `La suma de los numeros es: ${a +b +c + d}`;
}

/**
 * let msg1 = "Hola";
 * let msg2 = "Cohorte";
 * let msg3 = "36";
 * 
 * Let msgCompleto = `Mensaje completo: ${msg1} ${msg2} ${msg3}`;
 * 
 * Concatenar texto con estas comillas ` (alt+96) y ${}
 *
 */


////////////////////////////////////

// FUNCIONES FLECHA
/**
 * 1. Utilizar la palabra reservada const
 * 2. Asignar nombre
 * 3. Operador de asignación "=" y los parámetros entre ()
 * 4. fat arrow => y llaves {}
 * 
 */


 const miFuncionFlecha = () => {console.log("Mi primera chamba");}

 const sumarNumerosFlecha = (e, g) => (e + g);