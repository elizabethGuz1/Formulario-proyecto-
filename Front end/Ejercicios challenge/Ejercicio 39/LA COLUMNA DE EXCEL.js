
function columnaANumero(nombreColumna) {

    let numero = 0
    let pow = 0
  
    for(let i = nombreColumna.length - 1; i >= 0; i--) {
  
      
      let ascii = nombreColumna.charCodeAt(i) - 64

      numero += ascii * Math.pow(26, pow)
  
      pow++
    }
  
    return numero
  
  }
  
  console.log(columnaANumero("A")); 
  console.log(columnaANumero("Z")); 
  console.log(columnaANumero("AA")); 