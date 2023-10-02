/**
 * Ejercicio 10
 *  
 * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, 
 * es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: 
 * "La ruta nos aporto otro paso natural"
 *
 * Autor: Héctor Cevallos P.
 */

{
    let cadena = "11011.";

    function palindromos(cadena) {
        if (cadena.split("").reverse().join("").replace(/ /g, "").toLowerCase() == cadena.replace(/ /g, "").toLowerCase()) {
            console.log("Son palindromos");
        } else {
            console.log("No son palindromos");
        }
    }
    
    palindromos(cadena);
}