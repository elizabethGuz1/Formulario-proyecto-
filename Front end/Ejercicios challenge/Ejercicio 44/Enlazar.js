
function enlazarPalabras(palabras) {

    for(let i = 0; i < palabras.length - 1; i++) {
  
      let ultimaLetra = palabras[i][palabras[i].length - 1]
      let primeraLetra = palabras[i+1][0]
  
      if(ultimaLetra != primeraLetra) {
        return false
      }
  
    }
  
    return true
  
  }
  
  let lista1 = ["casa", "auto", "oferta", "anuncio"]
  let lista2 = ["amar", "bara", "casa"]
  
  
  console.log(enlazarPalabras(lista1))
  console.log(enlazarPalabras(lista2))