/**Ejercicios para esta sesion
 * 
 * Declara una funcion para cada problema planteado
 * 
 * calcular el perimetro de un circulo
 * calcular el area de un rectangulo
 * calcular el cuadrado de un numero
 * calcular la conversion de grados celsius a farenheit
 * calcular el valor del voltaje dadas la resistencia y la corriente
 * calcular el volumen de una esfera
 * 
 * CONSIDERACIONES: poner en practica las mejores practicas para declarar funciones
 * Los ejercicios se entregan tanto en funciones con nombre como funciones flecha
 */


// FUNCIONES CON NOMBRE
// 1. Perímetro de un círculo

function perimetroCirculo (d) {
    console.log(Math.PI * d);
    }

// 2. Área de un rectángulo

function areaRectangulo (b, h) {
    console.log(b * h);
    }

// 3. Cuadrado de un número

function cuadradoNumero (n) {
    console.log(n * n);
    }
    
//4. Conversion de grados celsius a farenheit
function convCelsiusFarenheit (c) {
    console.log("°F=" + ((c *(9/5)) + 32));
    }

//5. Valor del voltaje dadas la resistencia y la corriente
function formVoltaje (i, r) {
    console.log("Voltaje=" + (i* r));
    }

// 6. Volumen de una esfera
function volEsfera (r) {
    console.log("Volumen=" + ((4/3) * Math.PI * (Math.pow(r, 3))));
    }

//FUNCIONES FLECHA

// 1. Perímetro de un círculo
const periCirculo = (d) => (Math.PI * d);

// 2. Área de un rectángulo

const areaRectang = (b, h) => (b*h);
    

// 3. Cuadrado de un número

const numCuadraro = (n) => (n * n);
    
    
//4. Conversion de grados celsius a farenheit
const celsiusFarenheit = (c) => ("°F= " + ((c *(9/5)) + 32));
    

//5. Valor del voltaje dadas la resistencia y la corriente
const calcVoltaje = (i, r) => ("Voltaje= " + (i* r));
    

// 6. Volumen de una esfera
const esferaVolum = (r) => ("Volumen= " + ((4/3) * Math.PI * (Math.pow(r, 3))));
    