
const transformaciones = {
    'a': '4', 'b': 'I3', 'c': '(', 'd': ')', 'e': '3', 
    'f': 'ph', 'g': '6', 'h': '#', 'i': '!', 'j': ',_', 'k': '|<',
    'l': '1', 'm': '/\/\\', 'n': '^/', 'o': '0', 'p': '|*', 
    'q': '(_,)', 'r': 'I2', 's': '5', 't': '7', 'u': '(_)',
    'v': '\\/', 'w': '\\/\\/', 'x': '><', 'y': 'j', 'z': '2' 
  }
  
  let texto = prompt("Ingresa un texto");
  
  // minúsculas
  texto = texto.toLowerCase(); 
  
  let resultado = "";
  for (let i = 0; i < texto.length; i++) {
  
    // Verificar
    if (transformaciones[texto[i]]) {
      resultado += transformaciones[texto[i]];
    } else {
      resultado += texto[i];
    }
  
  }
  
  console.log(resultado);