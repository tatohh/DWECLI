/**
 * Crea la arrow function esFalsy que devuelva true si es un valor falsy, false en otro caso
   Crea un array literal con al menos todos los valores falsy que conozcas. Recórrelos de dos formas distintas e invoca la función esFalsy. Añade valores Truthy también.
   Crea un objeto literal con todos los valores falsy que conozcas. Recórrelos de todas las formas que conozcas (incluído el bucle "for in") e invoca la función esFalsy 
   Crea un método objetoPorDefecto que devuelva un objeto literal con una configuración por defecto. El objeto contendrá a su vez otro objeto. Compruébalo con varios valores 

 */
/**
 * @autor: Héctor Cevallos Paredes
 */

//Ejercicio 1

const falsy = [undefined, null, NaN, 0, "", false];

/**
 * @param {*} valor 
 * @returns si valor es Falsy o true
 */
const esFalsy = (valor)=> {
     if (!valor) {
          return true;
     }
     return false;
};

falsy.forEach(element => {
    console.log(esFalsy(element));
});


// Ejercicio 2

 const literal = [undefined, null, NaN, 0, -0, "", false, true, 7, "true"];

 literal.forEach(element => {
    console.log(`con un foreach: ` + esFalsy(element));
});

for (const clave of literal) {
    console.log(`con un for of: ` + esFalsy(clave));
}

// Ejercicio 3

const valores = {
    valorUndefined: undefined,
    valorNull: null,
    valorNaN: NaN,
    valorCero: 0,
    valorStringVacio: "",
    valorFale: false,
}

for (const clave in valores) {
    console.log(esFalsy(clave));
};

//Ejercicio 4

function Alumno(nombre, apellido, edad, curso) {
    this.nombre = nombre ?? "juan";
    this.apellido = apellido ?? "Perez";
    this.edad = edad ?? 23;
    this.curso = {
        curso:curso
    };
    
}
const alumnoDefault = new Alumno();
    console.log(alumnoDefault);