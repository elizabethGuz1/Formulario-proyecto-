 
let mensaje = prompt("Ingresa un mensaje");

// Contar letras
let letras = 0;
for (let i = 0; i < mensaje.length; i++) {
  letras = letras + 1;
}

// Contar palabras
let palabras = 1; 
for (let i = 0; i < mensaje.length; i++) {
  if (mensaje[i] == " ") {
    palabras = palabras + 1; 
  }
}

// Contar oraciones
let oraciones = 0;
for (let i = 0; i < mensaje.length; i++) {
  if (mensaje[i] == "." || mensaje[i] == "!" || mensaje[i] == "?") {
    oraciones = oraciones + 1;
  }
}

// Mostrar
alert("Letras: " + letras);
alert("Palabras: " + palabras);  
alert("Oraciones: " + oraciones);