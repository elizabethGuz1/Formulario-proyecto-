
let palabra = prompt("Ingrese una palabra:");

// Convertir la palabra a minúsculas 
palabra = palabra.toLowerCase();

// Contador de vocales 
let contadorTildadas = 0;

for(let i = 0; i < palabra.length; i++) {

  
  if(palabra[i] == "á" || palabra[i] == "é" || palabra[i] == "í" || palabra[i] == "ó" || palabra[i] == "ú") {
    contadorTildadas++;
  }

}

// contador de tildes 
if(contadorTildadas > 0) {
  console.log("Es una palabra en español");
} else {
  console.log("Es una palabra en inglés"); 
}