/**
 * Autor: Héctor H. Cevallos Paredes
 */

let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N',
 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
let numeroDNI = prompt("Introduce el número de tu DNI");
let letraDNI = prompt("Introduce la letra de tu DNI");

if (numeroDNI < 0 || numeroDNI > 99999999) {
    console.log("El número proporcionado no es válido");
} else {
    letraCalculada = letras [numeroDNI % 23];
    if (letraDNI == letraCalculada) {
        console.log("Número y letra correctos");
    } else {
        console.log("Letra incorrecta");
    }
}