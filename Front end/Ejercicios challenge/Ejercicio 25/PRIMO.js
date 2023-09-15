 
let numero = 89;

// declaracion 
let esPrimo = false;
let esFibonacci = false;
let esPar = false;

// primo
let divisor = 2; 
while(divisor < numero) {
  if(numero % divisor == 0) {
    esPrimo = false;
    break; 
  }
  divisor++;
}
if (esPrimo) {
  esPrimo = true;
}

//fibonacci
let a = 0;
let b = 1;
while(b < numero) {
  let c = a + b;
  if(c == numero) {
    esFibonacci = true;
  }
  a = b;
  b = c;
}

// par
if(numero % 2 == 0) {
  esPar = true;
}

// Mostrar resultados
console.log(numero + " es " + (esPrimo ? "primo" : "no primo"));
console.log(numero + " es " + (esFibonacci ? "fibonacci" : "no fibonacci")); 
console.log(numero + " es " + (esPar ? "par" : "impar"));