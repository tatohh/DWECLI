/**
 * Autor: Héctor H. Cevallos Paredes
 */

let valores = [true, 5, false, "hola", "adios", 2];

// Determinar cual de los dos elementos de texto es mayor
if (valores[3] > valores[4]) {
    console.log(valores[3] + " es mayor que " + valores[4]);
} else {
    console.log(valores[4] + " es mayor que " + valores[3]);
}


// Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores
// necesarios para obtener un resultado true y otro resultado false

resultado1 = valores[0] && valores[2];
console.log("con el operador && el resultado es: " + resultado1);

resultado2 = valores[0] || valores[2];
console.log("con el operador && el resultado es: " + resultado2);


// Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos
// elementos numéricos

let suma = valores[1] + valores [5];
console.log("la suma es: " + suma);

let resta = valores[1] - valores [5];
console.log("la resta es: " + resta);

let multiplicacion = valores[1] * valores [5];
console.log("la multiplicacion es: " + multiplicacion);

let division = valores[1] / valores [5];
console.log("la division es: " + division);

let modulo = valores[1] % valores [5];
console.log("el modulo es: " + modulo);