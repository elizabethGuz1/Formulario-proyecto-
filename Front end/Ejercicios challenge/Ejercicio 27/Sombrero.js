// Preguntas
console.log("¿Valoras más la valentía o la inteligencia?");
let respuesta1 = prompt("¿Valoras más la valentía o la inteligencia?");


if (respuesta1) {
    console.log("Respuesta 1: " + respuesta1); 
  }
  

console.log("¿Qué es más importante: ambición o lealtad?");  
let respuesta2 = prompt("¿Qué es más importante: ambición o lealtad?");

if (respuesta2) {
    console.log("Respuesta 2: " + respuesta2); 
  }
  
console.log("¿Astucia o trabajo duro?");
let respuesta3 = prompt("responde ¿Astucia o trabajo duro?");

if (respuesta3) {
    console.log("Respuesta 3: " + respuesta3); 
  }
  

let gryffindor = 0;
let ravenclaw = 0;
let slytherin = 0;
let hufflepuff = 0;

if (respuesta1 == "valentía") {
  gryffindor = gryffindor + 1; 
} else {
  ravenclaw = ravenclaw + 1;
}

if (respuesta2 == "ambición") {
  slytherin = slytherin + 1;
} else {
  hufflepuff = hufflepuff + 1;  
}

if (respuesta3 == "astucia") {
  slytherin = slytherin + 1;
} else {
  hufflepuff = hufflepuff + 1;
}

let casa;
if (gryffindor > Math.max(slytherin, ravenclaw, hufflepuff)) {
  casa = "Gryffindor";
} else if (slytherin > Math.max(gryffindor, ravenclaw, hufflepuff)) {
  casa = "Slytherin";
} else if (ravenclaw > Math.max(gryffindor, slytherin, hufflepuff)) {
  casa = "Ravenclaw";  
} else {
  casa = "Hufflepuff";
}

console.log("Tu casa es: " + casa);