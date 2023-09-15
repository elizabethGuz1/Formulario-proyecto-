function decimalAOctal(decimal) {
    let octal = "";
    while (decimal > 0) {
        let residuo = decimal % 8;
        octal = residuo + octal;
        decimal = (decimal - residuo) / 8;
    }
    return octal || "0";
}

function decimalAHexadecimal(decimal) {
    let hexadecimal = "";
    const digitosHex = "0123456789ABCDEF";
    while (decimal > 0) {
        let residuo = decimal % 16;
        hexadecimal = digitosHex[residuo] + hexadecimal;
        decimal = (decimal - residuo) / 16;
    }
    return hexadecimal || "0";
}
const numeroDecimal = prompt("Ingresa un número decimal:"); 
const numeroDecimalconvertido = parseInt(numeroDecimal);
const octal = decimalAOctal(numeroDecimal);
const hexadecimal = decimalAHexadecimal(numeroDecimal);

console.log(`El número decimal ${numeroDecimal} es ${octal} en octal y ${hexadecimal} en hexadecimal.`);
