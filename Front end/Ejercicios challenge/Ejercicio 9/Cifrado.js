
var mensajeOriginal = "Hola, esto es un mensaje";

var desplazamiento = 6;

// Función 
function cifrarCaracter(caracter, desplazamiento) {
    var codigo = caracter.charCodeAt(0);
    
    // Verificar si es una letra con códigos ASCII
    if ((codigo >= 65 && codigo <= 90) || (codigo >= 97 && codigo <= 122)) {  //códigos ASCII
        var esMayuscula = codigo >= 65 && codigo <= 90; 
        var codigoInicial = esMayuscula ? 65 : 97;
        var nuevaPosicion = (codigo - codigoInicial + desplazamiento) % 26 + codigoInicial; // 26 rango del alfabeto
        return String.fromCharCode(nuevaPosicion);
    }
    
    return caracter; 
}

function cifrarMensaje(mensaje, desplazamiento) {
    var mensajeCifrado = "";
    
    for (var i = 0; i < mensaje.length; i++) {
        var caracter = mensaje.charAt(i);
        mensajeCifrado += cifrarCaracter(caracter, desplazamiento);
    }
    
    return mensajeCifrado;
}

// mensaje 1

var mensajeCifrado = cifrarMensaje(mensajeOriginal, desplazamiento);

// mensaje 1 cifrado
console.log("Mensaje original: " + mensajeOriginal);
console.log("Mensaje cifrado: " + mensajeCifrado);
