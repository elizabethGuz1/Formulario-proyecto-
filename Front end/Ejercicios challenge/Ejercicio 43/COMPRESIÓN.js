
function comprimirCadena(texto) {

    let resultado = ""
  
    let contador = 1
    let letraAnterior = ""
  
    for(let i = 0; i < texto.length; i++) {
      
      let letra = texto[i]
  
      if(letra != letraAnterior) {
        if(contador > 1) {
          resultado += letraAnterior + contador  
        } else {
          resultado += letraAnterior
        }
        contador = 1
        letraAnterior = letra
      } else {
        contador++
      }
  
    }
  
    if(contador > 1) {
      resultado += letraAnterior + contador
    } else {
      resultado += letraAnterior
    }
  
    return resultado
  
  }

  console.log(comprimirCadena("aaabbccc"))