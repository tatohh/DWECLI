/**
 * Ejercicio 9
 * Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
 * A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
 *
 * Autor: Héctor Cevallos P.
 */

{
    let cadena = prompt("Introduce una cadena de caracteres: ");

    function infoCadena(cadena) {
        if (cadena == cadena.toLowerCase()) {
            console.log("La cadena esta minúscula");
        } else if (cadena == cadena.toUpperCase()) {
            console.log("La cadena esta en mayúscula");
        } else {
            console.log("La cadena esta formada por mayúsculas y minúsculas");
        }
    }

    infoCadena(cadena);
}