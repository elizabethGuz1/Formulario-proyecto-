
var cadenaTexto = prompt("Introduce una cadena de texto:");

var cadenaMinisculas = cadenaTexto.toLowerCase();

var contadorVocales = 0;
var contadorConsonantes = 0;

for (var i = 0; i < cadenaMinisculas.length; i++) {
    var caracter = cadenaMinisculas.charAt(i);
    if (caracter === 'a' || caracter === 'e' || caracter === 'i' || caracter === 'o' || caracter === 'u') {
        contadorVocales++;
    } else if (caracter !== ' ') {
        contadorConsonantes++;
    }
}

alert(`Número de vocales: ${contadorVocales}\nNúmero de consonantes: ${contadorConsonantes}`);
