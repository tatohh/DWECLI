/**
 * Autor: Héctor Cevallos P.
 */

/**
 * Función que imprime el número total de enlaces de la página
 */
function getHyperlinksNumber(array){  
    //Calculamos la totalidad con el tamaño del array
    let numberOfLinks = (array.length);
    console.log("1. Hay " + numberOfLinks +" enlaces en total.");    
}

/**
 * Función que imprime el último enlace de una página
 */
function lastLinkWeb(array){
    //Obtenemos el contenido de la última posición
    let lastIndex = array[array.length-1];
    console.log("2. El último enlace apunta a " + lastIndex);         
}

/**
 * Función que imprime el número de enlaces con el contenido 'prueba'
 */
function pruebaLinks(array){
    let cont = 0;
    //Recorremos el array  y comprobamos contenido de href
    for (let index = 0; index < array.length; index++) {
        if (array[index].href == "http://prueba/") {
           cont++; 
        }   
    }
    console.log("3. Hay " + cont + " links que enlazan a http://prueba");         
}

/**
 * Función que imprime el número de enlaces de cualquier párrafo 
 * @param index. Contiene el número del párrafo que queremos recorrer
 */
function linksInEachParagraph(array, index){
    let aTagNumber = array[index-1].getElementsByTagName("a");
    console.log("4. Hay "+ aTagNumber.length + " links en el párrafo número " + index + ".");     
}

document.addEventListener("DOMContentLoaded", function () {
let tag_a =  document.getElementsByTagName("a");
let tag_p =  document.getElementsByTagName("p");
let paragraphNumber = 3;

getHyperlinksNumber(tag_a);
lastLinkWeb(tag_a);
pruebaLinks(tag_a);
linksInEachParagraph(tag_p, paragraphNumber)
});