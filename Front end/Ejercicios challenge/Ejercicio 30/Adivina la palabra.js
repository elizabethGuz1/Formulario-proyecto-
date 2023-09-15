let palabra = "Idiosincrasia";

// letras aleatorias
let ocultas = Math.floor(Math.random() * palabra.length * 0.4);

let adivinar = "";

for (let i = 0; i < palabra.length; i++) {
  if (i < ocultas) {
    adivinar += "_";
  } else {
    adivinar += palabra[i];
  }
}

let intentos = 5;

// Jugar
while (intentos > 0) {
  console.log(adivinar + " Intentos: " + intentos);

  let intento = prompt("Adivina las letras de la palabra: " + adivinar + " Ingresa letra o palabra completa");

  if (intento.length === 1) {
    if (palabra.includes(intento)) {
      let nuevaAdivinar = "";
      for (let i = 0; i < palabra.length; i++) {
        if (palabra[i] === intento) {
          nuevaAdivinar += intento;
        } else {
          nuevaAdivinar += adivinar[i];
        }
      }
      adivinar = nuevaAdivinar;
    }
  } else {
    if (intento === palabra) {
      console.log("¡Ganaste! Adivinaste la palabra");
      break;
    } else {
      console.log("Palabra incorrecta");
    }
  }

  intentos--;
}

if (intentos === 0) {
  console.log("¡Perdiste! La palabra era " + palabra);
} else {
  console.log("¡Ganaste! Adivinaste la palabra");
}
