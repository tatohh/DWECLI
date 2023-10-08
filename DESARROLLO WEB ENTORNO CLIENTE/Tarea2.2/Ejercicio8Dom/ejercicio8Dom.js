/**
 * Autor: Héctor Cevallos P.
 * 
 * Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve
 * como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el
 * resultado devuelto por la función.
 */

/**
 * Función que comprueba y devuelve una cadena quete dice si un número es par o impar
 * @param {number} param 
 * @returns {string}
 */
function isAnEvenNumber(param) {
    return (param%2==0) ? "Es un número par." : "Es un número impar." 
}

//Salida por consola de los dos casos
document.addEventListener("DOMContentLoaded", function(){
    //Cargamos la variable con el id del label
    let input = document.getElementById("num");
    
    //Cuando pierda el foco va a mostrar el resultado
    input.addEventListener("blur", function(){
        //Pasamos al span          
        document.getElementById("result").textContent = isAnEvenNumber(input.value);
    });
    
});