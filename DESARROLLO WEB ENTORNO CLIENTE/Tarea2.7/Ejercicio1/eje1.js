/**
 * ambitos.js: declara variables con el mismo nombre y  con distintos ámbitos. 
 * Muestra su contenido en cada ámbito. Recuerda hacerla: local a una función, 
 * local a un bloque, global, accesible por un closure, accesible dentro de una función anidada.
 * 
 * @author : Hector Cevallos Paredes
 */


console.log("--Ambitos--");

//Global

let num = 4;
console.log(`Global: ${num}`);

//Ámbito de bloque

{
    let num = 7;
    console.log(`Bloque: ${num}`);
}

// Local a una función

function imprimir(valor) {
    let num = valor;
    console.log(`Función: ${num}`);
}

imprimir(5);

// Accesible a un closure

function clousure_1() {
    let num = 8;
    imprimir(`Clousure: ${num}`);
}

clousure_1();

// Función aninada

function myFunc(valor) {
    function imprim_an(valor) {
        let num = valor;
        console.log(`Función ${num}`);
    }

    let num = valor;
    imprim_an(`Aninada: ${num}`);
}

myFunc(9);