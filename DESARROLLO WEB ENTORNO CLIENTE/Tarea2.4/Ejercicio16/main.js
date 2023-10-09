/**
 * Autor: Hector Cevallos P.
 */

{
    document.addEventListener("DOMContentLoaded", function () {

        function muestraInformacion(evento) {

            if (evento.clientX > (document.documentElement.clientWidth/2) && evento.clientY < (document.documentElement.clientHeight/2)) {
                info.innerHTML = ("Ha hecho click a la derecha arriba.");
            } else if (evento.clientX > (document.documentElement.clientWidth/2) && evento.clientY > (document.documentElement.clientHeight/2)) {
                info.innerHTML = ("Ha hecho click a la derecha abajo.");
            } else if (evento.clientX < (document.documentElement.clientWidth/2) && evento.clientY < (document.documentElement.clientHeight/2)) {
                info.innerHTML = ("Ha hecho click a la izquierda arriba.");
            } else {
                info.innerHTML = ("Ha hecho click a la izquierda abajo.");
            }
        }
        document.onclick = muestraInformacion;

    });
}