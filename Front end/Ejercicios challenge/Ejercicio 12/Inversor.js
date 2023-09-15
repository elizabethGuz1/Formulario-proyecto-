
var frase = prompt("Ingrese una frase:");


function invertirPalabra(palabra) {
    var palabraInvertida = "";
    for (var i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }
    return palabraInvertida;
}

function invertirFrase(frase) {
    var palabras = frase.split(' ');
    var fraseInvertida = "";

    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        fraseInvertida += invertirPalabra(palabra);

        if (i < palabras.length - 1) {
            fraseInvertida += ' ';
        }
    }

    return fraseInvertida;
}

var fraseInvertida = invertirFrase(frase);
console.log("Frase invertida: " + fraseInvertida);
