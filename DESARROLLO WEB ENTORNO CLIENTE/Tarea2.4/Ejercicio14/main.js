/**
 * Autor: Hector Cevallos P.
 */

/**
 * Función que muestra el texto indicado
 */
{
    document.addEventListener("DOMContentLoaded", function () {

        let enlaces = document.getElementsByTagName("a");
        for (let i = 0; i < enlaces.length; i++) {
            document.getElementById("enlace_"+(i + 1)).addEventListener("click", function () {
                let parrafo = document.getElementById("contenidos_"+(i + 1));
                
                if (parrafo.style.display == "none") {
                    parrafo.style.display = "block";
                    enlaces[i].innerHTML = "Ocultar contenidos";
                } else {
                    parrafo.style.display = "none";
                    enlaces[i].innerHTML = "Mostrar contenidos";
                }
            })
        }
    });
}