
var mensajeCodificado = "El gato rojo tiene hambre";

var codificacion = {
    "gato": "agente",
    "rojo": "secreto",
    "hambre": "misión"
};

function recuperarMensajeOriginal(mensajeCodificado) {
    var palabras = mensajeCodificado.split(' ');
    var mensajeOriginal = "";

    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        if (codificacion[palabra]) {
            mensajeOriginal += codificacion[palabra];
        } else {
            mensajeOriginal += palabra;
        }

        if (i < palabras.length - 1) {
            mensajeOriginal += ' ';
        }
    }

    return mensajeOriginal;
}

var mensajeOriginal = recuperarMensajeOriginal(mensajeCodificado);
console.log("Mensaje original: " + mensajeOriginal);
