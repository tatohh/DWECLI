/**
 * Crea una página con el botón potencia: invoca una función closure que acumule una potencia. 
 * En cada invocación eleva a 2 el resultado. La base la tomará de un input NO NUMÉRICO. 
 * 
 * @author Héctor Cevallos Paredes
 * 
 */

console.log("--Potencia--");

/**
 * @name potencia
 * @param {int} base 
 * @returns int
 * 
 * Función clousure que calcula la potencia
 */
function potencia(base) {
    return function (exp) {
        return Math.pow(base,exp);
    };
}

const exp2 = potencia(2);

document.addEventListener("DOMContentLoaded", function () {
    let sol = 1;
    const base = document.getElementById("baseInput");
    const calcularButton = document.getElementById('calcularButton');
    calcularButton.addEventListener('click', function () { 
        const exponente = parseInt(base.value);
        sol *= exp2(exponente);
        console.log(sol);
    });
})