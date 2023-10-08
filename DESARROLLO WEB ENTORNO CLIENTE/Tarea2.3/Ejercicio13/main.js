/**
 * Autor: Héctor Cevallos P.
 */

/**
 * Función que añade un nuevo elemento a la lista
 */
function addElement(text, list){
    let newElement = document.createElement("li");
    let newContent = document.createTextNode(text.value);
    newElement.appendChild(newContent);
    list.appendChild(newElement);
}

document.addEventListener("DOMContentLoaded", function(){
    let button = document.getElementById("addButton");
    let list = document.getElementById("list");
    let text = document.getElementById("newArticle");
  

    //Invoca a la función de añadir elemento cuando se hace click en el botón
    button.addEventListener("click", function(){
        addElement(text, list);   
    });     
});