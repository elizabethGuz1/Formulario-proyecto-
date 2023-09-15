
function validarTarjetaCredito(numeroTarjeta) {
    
    var digitos = numeroTarjeta.toString().split('').map(Number);

    var sumaTotal = 0;
    for (var i = digitos.length - 2; i >= 0; i -= 2) {
        var dobleDigito = digitos[i] * 2;
        if (dobleDigito >= 10) {
            dobleDigito = dobleDigito - 9;
        }
        sumaTotal += dobleDigito;
    }
    for (var j = digitos.length - 1; j >= 0; j -= 2) {
        sumaTotal += digitos[j];
    }

    return sumaTotal % 10 === 0;
}

var numeroTarjeta1 = 4556737586899855;
var numeroTarjeta2 = 6011284164244444;
var numeroTarjeta3 = 1234567890123456;

console.log(`¿La tarjeta ${numeroTarjeta1} es válida? ${validarTarjetaCredito(numeroTarjeta1)}`);
console.log(`¿La tarjeta ${numeroTarjeta2} es válida? ${validarTarjetaCredito(numeroTarjeta2)}`);
console.log(`¿La tarjeta ${numeroTarjeta3} es válida? ${validarTarjetaCredito(numeroTarjeta3)}`);
