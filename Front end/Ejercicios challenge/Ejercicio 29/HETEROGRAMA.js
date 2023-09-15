
let texto = prompt("Ingresa una frase o palabra");


// Heterograma
function esHeterograma(texto) {     
    for (let i = 0; i < texto.length; i++) {
      for (let j = i + 1; j < texto.length; j++) {
        if (texto[i] === texto[j]) {
          return false; 
        }
      }
    }
    return true;
  }
  
  // Isograma
  function esIsograma(texto) {
    texto = texto.toLowerCase();
    
    for (let i = 0; i < texto.length; i++) {
      for (let j = i + 1; j < texto.length; j++) {
        if (texto[i] === texto[j]) {
          return false;
        }
      }
    }
  
    return true;
  } 
  
  // Pangrama
  function esPangrama(texto) {
    let letras = "abcdefghijklmnñopqrstuvwxyz";
    texto = texto.toLowerCase();
  
    for (let i = 0; i < letras.length; i++) {
      if (!texto.includes(letras[i])) {
        return false;
      }
    }
  
    return true;
  }

  if (esHeterograma(texto)) {
    console.log("Es un heterograma");
  } else if (esIsograma(texto)) {
    console.log("Es un isograma");
  } else if (esPangrama(texto)) { 
    console.log("Es un pangrama");
  } else {
    console.log("No es ninguno de los anteriores");
  }