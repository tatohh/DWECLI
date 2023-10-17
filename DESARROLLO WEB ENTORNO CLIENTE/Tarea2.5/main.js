/**
 * Autor: Hector Cevallos P.
 * 
 * Crea un array con distintos ejemplos de datos. Además de NaN, Infinity y null incluye 
 * todos los primitivos (menos Symbol()) y 
 * varios no primitivos (new Date()...), incluidas declaraciones de funciones
 * Recórrelo con la sentencia for (no el clásico) y utiliza:
 *  typeof para indicar si es o no primitivo
 * instanceof para averiguar el tipo de objeto que es (Array, String...)
 * En caso de ser primitivo, indica: 
 * PRIMITIVO - (tipo de primitivo) - valor
 * En caso de ser objeto, indica: 
 * OBJETO - (true) - de tipo Constructor - valor
 * Utiliza:
 * objeto.constructor.name para el operador instanceof.
 * template String para evitar la concatenación de cadenas
 * error.message en caso de tener que capturar una excepción
 */

const array_datos = [
    42,
    "Hola y Adios",
    true,
    undefined,
    NaN,
    Infinity,
    null,
    123456789n,
    function () {
        return 1;
    },
    [1, 2, 3],
];

document.addEventListener("DOMContentLoaded", function () {
    let resultados = document.getElementById('resultados');
    array_datos.forEach(element => {
        if (typeof element == "string" ||
            typeof element == "number" ||
            typeof element == "boolean" ||
            typeof element == "undefined") {
            resultados.innerHTML += '<li>PRIMITIVO - <strong>' + typeof element + '</strong>: ' + element + '</li>';
        } else {
            try {
                resultados.innerHTML += '<li>OBJETO - ' + (element instanceof Object) + ' - de tipo ' + element.constructor.name + ': ' + element + '</li>';
            } catch (error) {
                resultados.innerHTML += '<li>ERROR - ' + error.message + '</li>';
            }
        }
    });
});