
function numeroAAbaco(num) {

    let abaco = [];
  
    let numString = num.toString()
  
    for(let i = 0; i < numString.length; i++) {
      let digitos = numString[i];
      let fila = "O".repeat(digitos) + "---"
      abaco.unshift(fila)
    }
  
    return abaco;
  
  }
 
  function leerAbaco(abaco) {
  
    let numero = 0
  
    for(let i = 0; i < abaco.length; i++) {
  
      let cuentas = abaco[i].split("---")[0]
      let digitos = cuentas.length
  
      numero = numero * 10 + digitos
  
    }
  
    return numero
  
  }
  
  let numeroInicial = prompt("Ingresa un número")
  numeroInicial = Number(numeroInicial)

  let abaco = numeroAAbaco(numeroInicial)

  console.log(abaco)
  
  let numeroFinal = leerAbaco(abaco)
  
  console.log(numeroFinal)