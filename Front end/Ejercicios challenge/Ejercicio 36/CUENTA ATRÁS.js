
function cuentaRegresiva(numero) {

    for(let i = numero; i > 0; i--) {
  
      console.log(i)
      
      
      esperar(2)
  
    }
  
    console.log("Felicidades llegaste a cero!")
    
  }
  

  function esperar(segundos) {
  
    let inicio = new Date().getTime();
  
    while(true) {
      if(new Date().getTime() - inicio > segundos * 1000) {
        break;
      }
    }
  
  }
  
  let inicio = prompt("Ingresa número para cuenta regresiva");
  inicio = Number(inicio)
  
  cuentaRegresiva(inicio)