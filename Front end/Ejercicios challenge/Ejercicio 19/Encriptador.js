// Alfabeto original
let abc = "abcdefghijklmnopqrstuvwxyza";

// Alfabeto desplazado  
let abcCifrado = "bcdefghijklmnopqrstuvwxyza";

let mensaje = prompt("Ingresa un mensaje");
 
let cifrado = "";

// iteracion 
for (let i = 0; i < mensaje.length; i++) {

  let letra = mensaje[i];
  
  // Buscar
  let pos = abc.indexOf(letra);

  // Revisar 
  if(pos !== -1) {

    let nuevaLetra = abcCifrado[pos];

    // Agregar la nueva letra 
    cifrado += nuevaLetra;
  }
  
}
// Mostrar mensaje cifrado
alert(cifrado);