/**
 * Autor: Hector Cevallos P.
 */

/**
 * Función que muestra el texto indicado
 */
function showText (hiddenText, link, hiddenLink){
    hiddenText.className = "visible"; 
    link.className = "hidden"; 
    hiddenLink.className = "visible";
}
/**
 * Función que esconde el texto indicado 
 */
function hideText (hiddenText, link, hiddenLink){
    hiddenText.className = "hidden"; 
    link.className = "visible"; 
    hiddenLink.className = "hidden";
}

document.addEventListener("DOMContentLoaded", function () {
    let hiddenText = document.getElementById("hiddenText");
    let link = document.getElementById("link");
    let hiddenLink = document.getElementById("hiddenLink");
    //Muestra texto con click en el link
    link.addEventListener("click", function(){
     showText(hiddenText, link, hiddenLink);            
    })
    //Devuelve texto a su estado original con click en el link
    hiddenLink.addEventListener("click", function(){
         hideText(hiddenText, link, hiddenLink);        
    })
});