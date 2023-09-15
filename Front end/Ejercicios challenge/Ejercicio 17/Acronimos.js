function generar() {

  let frase = document.getElementById("frase").value;
  
  let palabras = frase.split(" ");
  
  let acronimo = "";

  for (let i = 0; i < palabras.length; i++) {

    acronimo = acronimo + palabras[i][0];

  }

  document.getElementById("resultado").innerHTML = acronimo.toUpperCase();

}