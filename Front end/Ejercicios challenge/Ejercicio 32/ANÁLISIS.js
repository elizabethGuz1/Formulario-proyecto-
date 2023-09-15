
let texto = prompt("Ingresa un texto");

// Contadores  
let totalPalabras = 0;
let totalLetras = 0;
let oraciones = 0;


let palabraLarga = "";  

// Iterar  
let palabraActual = "";
for(let i = 0; i < texto.length; i++) {

  let letra = texto[i];

  if(letra != " " && letra != "." && letra != "!") {
    
 
    palabraActual += letra;

  } else {

    totalPalabras++;

    totalLetras += palabraActual.length;

    if(palabraActual.length > palabraLarga.length) {
      palabraLarga = palabraActual;
    }

    palabraActual = "";

    if(letra == "." || letra == "!") {
      oraciones++;
    }
  }
}

let promedio = totalLetras / totalPalabras;

console.log("Total palabras: " + totalPalabras);
console.log("Promedio letras por palabra: " + promedio);
console.log("Oraciones: " + oraciones); 
console.log("Palabra más larga: " + palabraLarga);