
let cadena = prompt("Ingresa una cadena");

cadena = cadena.toLowerCase();

let inversa = "";

for (let i = cadena.length - 1; i >= 0; i--) {
  inversa += cadena[i];
}

// Comparar cadenas 
if (cadena == inversa) {
  console.log("Es palíndromo");
} else {
  console.log("No es palíndromo");
}