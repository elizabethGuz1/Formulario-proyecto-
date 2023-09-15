// 1 al 100 
for(let i = 1; i <= 100; i++) {

    //  múltiplo de 3 y 5
    if(i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz"); 
   
    // Verificar si es múltiplo de 3
    } else if(i % 3 == 0) {
      console.log("fizz");
    
    // Verificar si es múltiplo de 5
    } else if(i % 5 == 0) {
      console.log("buzz");
  
    
    } else {
      console.log(i);
    }
  
  }