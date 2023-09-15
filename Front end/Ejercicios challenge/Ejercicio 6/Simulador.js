
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// variables 
const dado1 = generarNumeroAleatorio(1, 6)
const dado2 = generarNumeroAleatorio(1, 6)

// suma de los valores
const sumaDados = dado1 + dado2

console.log(`Dado 1: ${dado1}`);
console.log(`Dado 2: ${dado2}`);
console.log(`Suma de los dados: ${sumaDados}`)
