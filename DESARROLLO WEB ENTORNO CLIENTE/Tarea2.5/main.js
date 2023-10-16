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


{
    let datos = [6, 6n, "hola y adios", undefined, true, new Date(), null, function suma(a, b) { return a + b }, [1, 2, 3, 4, 5], NaN];

    for (let dato of datos) {
        try {
            if (typeof dato === 'object' || typeof dato === 'function') {
                console.log(`OBJETO - (${dato instanceof dato.constructor}) - de tipo ${dato.constructor.name} - ${dato}`);
            } else {
                console.log(`PRIMITIVO - (${typeof dato}) - ${dato}`);
            }
        } catch (error) {
            console.log(`ERROR: ${error.message}`);
        }
    }
}