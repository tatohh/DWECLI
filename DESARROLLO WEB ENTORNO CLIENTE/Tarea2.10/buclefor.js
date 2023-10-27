/**
 * Responde a las siguientes preguntas en este repositorio:
   Crea una función anónima autoejecutable que haga uso de break y continue 
   Utiliza un for-of sobre una cadena. ¿Es iterable?
   Invéntate un ejemplo del método forEach() que use todos sus parámetros
   Indica si es o no iterable un objeto
   Usa los siguientes for: 
   for in sobre un array
   for in sobre un objeto 
   for in sobre la clase Array (new Array())
 */

/**
 * @author: Héctor Cevallos Paredes
 */

//Ejercicio 1

(function () {
    let numero = 0;

    while (numero < 10) {
        numero++;
        if (numero == 5) {
           continue;
        } else if (numero == 8) {
            break;
        }
        console.log(numero);
    }
})();


// Ejercicio 2
 
let cadena = "Esto es una cadena";

for (let caracter of cadena) {
    console.log(caracter);
};

 // Ejercicio 3

let objetoHector = {
    nombre: "Héctor",
    apellido: "Cevallos",
    edad: 42,
    pelo: "Negro Azabache",
};

for (let propiedad in objetoHector) {
    console.log(objetoHector[propiedad]);
};


// Ejercicio 4

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let indice in array) {
    console.log(array[indice]);
};

for (let propiedad in objetoHector) {
    console.log(objetoHector[propiedad]);
};


const arrayNuevo = new Array (10, 20, 30, 40, 50, 60, 70, 80, 90, 100);
for (let indice in arrayNuevo) {
    console.log(indice);
};
