
let number = Date.now();

function next() {

  number = (number* 9301 + 49297) % 233280;

  // Convertir a número entre 0 y 100
  return number / 233280 * 100;

}

for(let i = 0; i < 100; i++) {
  console.log(Math.floor(next())); 
}