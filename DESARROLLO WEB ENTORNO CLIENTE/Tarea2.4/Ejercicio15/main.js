/**
 * Autor: Hector Cevallos P.
 */

{
    document.addEventListener("DOMContentLoaded", function () {
        function coordenadasRaton(evento) {
            document.getElementById("info").style.backgroundColor = ("#CCE6FF");
            document.getElementById("info").style.textAlign ="center";
            info.innerHTML = ("<h1> Raton </h1> <br> Navegador[" + evento.clientX + ", " + evento.clientY + "]<br> Pantalla[" + evento.screenX + ", " + evento.screenY + "]");

        }

        document.addEventListener("mousemove",coordenadasRaton);

        function muestraInformacion(evento) {
            let mensaje = "<h1> Teclado </h1> <br>" +
                "Caracter[" + evento.keyCode + "]<br>" +
                "Codigo[" + String.fromCharCode(evento.charCode) + "]";

            document.getElementById("info").style.backgroundColor = ("#FFFFCC");
            info.innerHTML = mensaje
        }
        document.addEventListener("keypress",muestraInformacion);
    });
}

