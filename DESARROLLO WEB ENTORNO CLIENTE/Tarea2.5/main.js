/**
 * Ejercicio 17 - Limitar número de caracteres en textarea
 * 
 * @author: Héctor Cevallos Paredes
 */

function limite(maximoCaracteres, event) {
    let elemento = document.getElementById("texto");
    let contador = document.getElementById("contador");

    event = event || window.event || {};

    if (elemento.value.length > maximoCaracteres) {
        elemento.value = elemento.value.substring(0, maximoCaracteres);
    }

    let caracteresRestantes = maximoCaracteres - elemento.value.length;
    contador.textContent = caracteresRestantes + " caracteres restantes";

    if (!(caracteresRestantes >= 0 || event.key === "Backspace" || event.key === "Delete" || event.key === "ArrowLeft" || event.key === "ArrowRight")) {
        event.preventDefault();
    }
}

