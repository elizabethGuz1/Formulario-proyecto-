
function validarExpresion(expresion) {

    let partes = expresion.split(" ")
  
    for(let i = 0; i < partes.length; i++) {
  
      let parte = partes[i]
  
      if(!isNaN(parte)) {
        continue
      }
 
      if(parte != "+" && parte != "-" && parte != "*" && parte != "/") {
        return false
      }
  
    }
  
    return true
  
  }

  let e1 = "5 + 6 / 7 - 4"
  let e2 = "5 a 6"
  let e3 = "4-9*0 "
  
  console.log(validarExpresion(e1)); // true
  console.log(validarExpresion(e2)); // false