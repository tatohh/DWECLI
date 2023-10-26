/**
 * ambitoMultiplica.js: declara variables numéricas cada una en distintos ámbitos. 
 * Multiplícalas todas en el ámbito más interno. Recuerda hacerlas: local a una función, local a un bloque, global, 
 * accesible por un closure, accesible dentro de una función anidada.
 * 
 * @author : Héctor Cevallos Paredes
 */

console.log("--ambitoMultiplica--");

let aa = 20;

{
    function multiplica(val) {
        function anidada(v1, v2) {
            let res = aa*v1*v2;
            console.log(`El resultado es ${res}`);
        }
        let cc = val;
        let dd = 25;
        anidada(cc, dd);
    }

    let bb = 2;
    multiplica(bb);
}