/**
 * Ejercicio 8
 * 
 *Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto
  que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.

 * Autor: Héctor Cevallos P.
 */
// Utilizo un prompt para interactuar en el ejercicio.
  let num = prompt("INTRODUCE UN Número entero: ");
  let resultado = parOImpar(num);
  
  function parOImpar(num) {
      let resultado;
      if (num % 2 === 0) {
          resultado = "par";
      } else {
          resultado = "impar";
      }
      return resultado;
  }
  
  // Muestro el resultado en la consola
  console.log(`El número ${num} es ${resultado}.`);
