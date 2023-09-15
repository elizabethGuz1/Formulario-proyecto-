//Variables 

let peso = 70
let altura = 1.70

// Calcular el BMI 

let BMI = peso / (altura *altura)

// Imprimir 
console.log ("el BMI calculado es:" +  BMI)

// Etiquetas  

if (BMI < 18.5) {
    console.log("tienes bajo peso, considera mejorar tu alimentacion guiada de tu medico")
}
else if (BMI >= 18.5 && BMI < 25 ) {
    console.log("tienes un peso estable , manten una alimentacion balanceada")
}
else if (BMI >= 18.5 && BMI < 30) {
    console.log("tienes sobrepeso , haz ejercicio y consulta con tu medicouna alimentacion mas saludable")
}