// Generar número aleatorio
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

const intentosPermitidos = 3;

let intentos = 1; 

while(intentos <= intentosPermitidos) {

  let suposicion = parseInt(prompt("Ingresa tu suposición:"));

  if(suposicion == numeroAleatorio) {
    console.log("¡Adivinaste!"); 
    break;
  } else if(suposicion > numeroAleatorio) {
    console.log("Demasiado alto");
  } else {
    console.log("Demasiado bajo");
  }

  intentos++; // Incrementar intentos

}

if(intentos > intentosPermitidos) {
  console.log(`Perdiste. El número era ${numeroAleatorio}`);
}