
let filas = prompt("Ingresa número de filas");

for(let i = 1; i <= filas; i++) {

  let espacios = " ".repeat(filas - i); 
  let asteriscos = "*".repeat(i * 2 - 1);

  console.log(espacios + asteriscos + espacios);

}

for(let i = filas; i >= 1; i--) {

  let espacios = " ".repeat(filas - i);


  let asteriscos = "*".repeat(i * 2 - 1);

  console.log(espacios + asteriscos + espacios); 

}