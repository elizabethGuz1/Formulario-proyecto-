
let max = prompt("Ingresa el rango máximo");
max = Number(max);


for(let i = 2; i <= max; i++) {

  
  let esPrimo = true;
  for(let j = 2; j < i; j++) {
    if(i % j == 0) {
      esPrimo = false;
      break; 
    }
  }
  let esSiguientePrimo = true;
  for(let j = 2; j < i+2; j++) {
    if((i+2) % j == 0) {
      esSiguientePrimo = false;
      break;
    }
  }
  if(esPrimo && esSiguientePrimo) {
    console.log("(" + i + ", " + (i+2) + ")");
  }

}