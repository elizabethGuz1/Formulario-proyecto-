
var nombreUsuario = prompt("Ingresa tu nombre:");
var animalFavorito = prompt("Ingresa tu animal favorito:");

var primerLetraMayuscula = animalFavorito.charAt(0).toUpperCase();
var restoAnimal = animalFavorito.slice(1);

var nombreSuperheroe = primerLetraMayuscula + restoAnimal + " " + nombreUsuario;

console.log("Tu nombre de superhéroe es: " + nombreSuperheroe);
