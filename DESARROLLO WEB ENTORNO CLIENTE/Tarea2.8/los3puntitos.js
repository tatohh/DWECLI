/**
 * Crea un método que utilice  el parámetro rest. Qué hace
   Utiliza dos veces los tres puntos en la invocación de una función. Qué hace.
   Utiliza los tres puntos para duplicar un array. ¿Cuántos niveles duplica?
   Invéntate un ejemplo de cómo, mediante el operador spread, se añaden de forma condicional valores a un array. Que ejecute el 100% del código
   Utiliza los tres puntos para duplicar un objeto. Confirma si es una shadow copy
   Invéntate un ejemplo en el que se sobreescriban propiedades de un objeto mediante el operador spread. Confirma que toma el último valor.
   Invéntate un ejemplo de cómo, mediante el operador spread, se añaden de forma condicional valores a un objeto. Que ejecute el 100% del código
 */
/**
 * @author: Héctor Cevallos Paredes
 */

// Metodo  con parametro Rest
function contarArgumentos(...argumentos) {
    console.log(argumentos.length);
}

contarArgumentos(1,4,6,7);

//2 Operador spread

const array1 = [3, 5, 1];
const array2 = [8, 9, 15];

const mezcla = [0, ...array1, 2, ...array2]; // dos veces los tres puntos en la invocación de una función
console.log(mezcla.sort());

// tres puntos para duplicar un array. Todos
const array3 = [3, 5, 1,['a', 'b', 'c',[2,7,4,['nivel1', 'nivel2', 'nivel3']]]];
const copia = [...array3];


console.log(array3);
console.log(copia);

console.log(copia[3][3][3][0]);

copia[3][3][3][0] = "cambiado";

console.log(`para comprobar array3: ${array3}`);
console.log(`para comprobar la copia: ${copia}`);


//Es shadow copy, ya que si modificamos el objeto dentro de otro objeto, se modifica en el original.)
const moto = {
    marca : 'BMW',
    cilindrada : 2000,
    color : {primario:'rojo', secundario:'blanco'},
    reparada : true,
};

const copiaMoto = {...moto};

copiaMoto.color.primario = 'azul';

console.log(moto);
console.log(copiaMoto);
