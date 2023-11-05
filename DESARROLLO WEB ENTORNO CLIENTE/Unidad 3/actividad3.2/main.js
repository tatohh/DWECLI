/**
 * 1. Capitaliza. Transforma entrada a otra similiar con la primera letra de cada palabra en mayúscula. 
 * 2. Invierte.  Transforma entrada a otra similiar con las mayúsculas/minúsculas invertidas.
 * 3. CamelCase.  Transforma entrada a otra similiar con formato en Camel Case (hola amigos cómo estáis -> holaAmigosCómoEstáis)
 * 4. Sin CamelCase.  Transforma entrada a otra similiar quitando el formato Camel Case (holaAmigosCómoEstáis -> hola amigos cómo estáis)
 * 5. Finaliza... Averigua si una cadena acaba con otra.
 * 6. Empieza... Averigua si una cadena comienza con otra.
 * 7. DNI. Indica error en caso de que la entrada no sea DNI válido. Usa expresiones regulares con grupos de captura en la comprobación de la letra
 * 
 * @author: Héctor Cevallos Paredes
 * 
 */

{
    /**
        * Transforma entrada a otra similar quitando el formato snake y pasándolo a formato CamelCase.
        * @param {*} cadena 
        * @returns 
        */
    function snakeCaseToCamelCase(cadena) {
        return cadena.replace(/_([a-z])/g, function (match, letra) {
            return letra.toUpperCase();
        });
    }


    /**
    * Transforma entrada a otra similar quitando el formato snake y pasándolo a formato CSS.
    * @param {*} cadena 
    * @returns 
    */
    function snakeCaseToCssCase(cadena) {
        return cadena.replace(/_/g, '-');
    }

    document.addEventListener('DOMContentLoaded', function(){


        /**
         * Transforma entrada a otra similiar con la primera letra de cada palabra en mayúscula.
         * @param {*} cadena 
         * @returns x
         */      
        function capitalizaFunction(cadena) {
            let cadenaMayuscula = cadena.replace(/\b\w/g, c => c.toUpperCase())
            return cadenaMayuscula;
        }

        /**
         * Transforma entrada a otra similiar con las mayúsculas/minúsculas invertidas.
         * @param {*} cadena 
         * @returns 
         */
        function invierteFunction(cadena) {
            let cadenaInvertida = "";
            cadena = Array.from(cadena);
            cadena.forEach(element => {
                (element === element.toUpperCase()) ? (cadenaInvertida = cadenaInvertida + element.toLowerCase()) : (cadenaInvertida = cadenaInvertida + element.toUpperCase());
            });
            return cadenaInvertida;
        }

        /**
         * Transforma entrada a otra similiar con formato en Camel Case (hola amigos cómo estáis -> holaAmigosCómoEstáis)
         * @param {*} cadena 
         * @returns 
         */
        function camelCaseFunction(cadena) {
            function separaYMayus(ocurrencias) {
                return ocurrencias.toUpperCase().trimLeft();
            }
            let cadenaCamelCase = cadena.replace(/\b\s[\wñÑáéíóú]/g, separaYMayus);
            return cadenaCamelCase;
        }

        /**
         * Transforma entrada a otra similiar quitando el formato Camel Case (holaAmigosCómoEstáis -> hola amigos cómo estáis)
         * @param {*} cadena 
         * @returns 
         */
        function sinCamelCaseFunction(cadena) {
            function espaciosYMin(ocurrencias) {
                return " " + ocurrencias.toLowerCase();
            }
            let cadenaSinCamelCase = cadena.replace(/[A-ZÁÉÍÓÚ]/g, espaciosYMin);
            return cadenaSinCamelCase;
        }


        /**
         * Averigua si una cadena acaba con otra.
         * @param {*} cadena 
         * @param {*} palabraFinal 
         * @returns 
         */
        function finalizaFunction(cadena, palabraFinal) {
            cadena = cadena.split(" ");
            if (palabraFinal == cadena[cadena.length - 1]) {
                return `La cadena finaliza con cadena ${palabraFinal}`;
            } else {
                return `La cadena no finaliza con cadena ${palabraFinal}`;
            }
        }

        /**
         * 
         * @param {*} cadena 
         * @param {*} palabraInicial 
         * @returns 
         */
        function comienzaFunction(cadena, palabraInicial) {
            cadena = cadena.split(" ");
            if (palabraInicial == cadena[0]) {
                return `La cadena comienza con cadena ${palabraInicial}`;
            } else {
                return `La cadena no comienza con cadena ${palabraInicial}`;
            }
        }

        /**
         * Indica error en caso de que la entrada no sea DNI válido. Usa expresiones regulares con grupos de captura en la comprobación de la letra
         * @param {*} cadena 
         * @returns 
         */
        function validacionDniFunction(cadena) {
            if (/^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i.test(cadena)) {
                let DNINumero = parseInt(cadena.substring(0, 8));
                let DNILetra = cadena.substring(8,9).toUpperCase();
                let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
                if (letras[DNINumero%23] == DNILetra) {
                    return "Dni valido";
                } else {
                    return "Letra no valida";
                }
            } else {
                return "Dni no valido";
            }
        }

        /**
         * 
         * @param {*} cadena 
         * @returns 
         */
        function validacionMatriculaFunction(cadena) {
            if (/^[0-9]{4}[- ]?[B-DF-HJ-NPR-TVZ]{3}$/i.test(cadena)) {
                return "Matricula valida";
            } else {
                return "Matricula no valida";
            }
        }
        
        /**
         * 
         * @param {*} cadena 
         * @returns 
         */
        function validacionCodigoPostalFunction(cadena) {
            if ( /\b(50|51|52|[1-4][0-9]|0[1-9])(\d\d[1-9]|\d[1-9]\d|[1-9])/gi.test(cadena)) {
                return "Codigo postal valido";
            } else {
                return "Codigo postal no valido";
            }
        }

        /**
         * 
         * @param {*} cadena 
         * @returns 
         */
        function validacionMacFunction(cadena) {
            if (/^([0-9A-Fa-f]{2}[:]){5}([0-9A-Fa-f]{2})$|^([0-9A-Fa-f]{2}[-]){5}([0-9A-Fa-f]{2})$|^([0-9A-Fa-f]{2}){5}([0-9A-Fa-f]{2})$/.test(cadena)) {
                return "Mac valida";
            } else {
                return "Mac no valida";
            }
        }

        /**
         * 
         * @param {*} cadena 
         * @returns 
         */
        function validacionIpFunction(cadena) {
            if (/^\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b$/g.test(cadena)) {
                return "Ip valida";
            } else {
                return "Ip no valida";
            }
        }

        //Inicializo las variables con el id del input del que necito el valor

        let capitaliza = document.getElementById("capitaliza");
        let invierte = document.getElementById("invierte");
        let camelCase = document.getElementById("camelCase");
        let sinCamelCase = document.getElementById("sinCamelCase");
        let snakeCaseToCamelCase1 = document.getElementById("snakeCaseToCamelCase");
        let snakeCaseToCssCase1 = document.getElementById("snakeCaseToCssCase");
        let finaliza1 = document.getElementById("finaliza1");
        let finaliza2 = document.getElementById("finaliza2");
        let comienza1 = document.getElementById("comienza1");
        let comienza2 = document.getElementById("comienza2");
        let dni = document.getElementById("dni");
        let matricula = document.getElementById("matricula");
        let codigoPostal = document.getElementById("codigoPostal");
        let mac = document.getElementById("mac");
        let ip = document.getElementById("ip");

        //Le agrego a los input la funcion blur para llamar a la función correspondiente

        capitaliza.addEventListener("blur", function () {
            document.getElementById("resultadoCapitaliza").innerText = capitalizaFunction(capitaliza.value);
        })
        
        invierte.addEventListener("blur", function () {
            document.getElementById("resultadoInvierte").innerText = invierteFunction(invierte.value);
        })

        camelCase.addEventListener("blur", function () {
            document.getElementById("resultadoCamelCase").innerText = camelCaseFunction(camelCase.value);
        })

        sinCamelCase.addEventListener("blur", function () {
            document.getElementById("resultadoSinCamelCase").innerText = sinCamelCaseFunction(sinCamelCase.value);
        })

        snakeCaseToCamelCase1.addEventListener("blur", function () {
            document.getElementById("resultadoSnakeCaseToCamelCase").innerText = snakeCaseToCamelCase(snakeCaseToCamelCase1.value);
        })
    
        snakeCaseToCssCase1.addEventListener("blur", function () {
            document.getElementById("resultadoSnakeCaseToCssCase").innerText = snakeCaseToCssCase(snakeCaseToCssCase1.value);
        })

        finaliza2.addEventListener("blur", function () {
            document.getElementById("resultadoFinaliza").innerText = finalizaFunction(finaliza1.value, finaliza2.value);
        })

        comienza2.addEventListener("blur", function () {
            document.getElementById("resultadoComienza").innerText = comienzaFunction(comienza1.value, comienza2.value);
        })

        dni.addEventListener("blur", function () {
            document.getElementById("resultadoDni").innerText = validacionDniFunction(dni.value);
        })

        matricula.addEventListener("blur", function(){
            document.getElementById("resultadoMatricula").innerText = validacionMatriculaFunction(matricula.value);
        })

        codigoPostal.addEventListener("blur", function(){
            document.getElementById("resultadoCodigoPostal").innerText = validacionCodigoPostalFunction(codigoPostal.value);
        })

        mac.addEventListener("blur", function(){
            document.getElementById("resultadoMac").innerText = validacionMacFunction(mac.value);
        })

        ip.addEventListener("blur", function(){
            document.getElementById("resultadoIp").innerText = validacionIpFunction(ip.value);
        })
        
    });
}