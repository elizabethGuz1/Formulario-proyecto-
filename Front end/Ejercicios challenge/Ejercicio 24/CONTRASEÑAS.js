
function generarPassword(longitud, mayusculas, numeros, simbolos) {

    // Abecedario
    let caracteres = "abcdefghijklmnopqrstuvwxyz";
  
    // mayúsculas 
    if(mayusculas) {
      caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    //números 
    if(numeros) {
      caracteres += "0123456789";
    }
    // símbolos 
    if(simbolos) {
      caracteres += "!@#$%^&*()_+-=[]{}|;:,.<>/?";
    }
    // contraseña
    let password = "";
    for(let i = 0; i < longitud; i++) {
      password += caracteres.charAt(Math.floor(Math.random() * caracteres.length)); 
    }
  
    return password;
  }
  
  let pass = generarPassword(10, true, true, true); 
  console.log(pass);