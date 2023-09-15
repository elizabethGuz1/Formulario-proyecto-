// Crear variables para nombre y apellido
let nombre = "Juan";
let  apellido = "Pérez";

// Generar el nombre de usuario
let nombreUsuario = nombre[0] + nombre[1] + nombre[2] + apellido[0] + apellido[1] + apellido[2] + generarNumeroAleatorio();

// Generar un número 0 y 99
var numeroAleatorio = 50 // valor que puede cambiar 

// nombre de usuario generado
console.log("Tu nombre de usuario es: " + nombreUsuario);

// el número es menor que 100   

function generarNumeroAleatorio() {
  numeroAleatorio = numeroAleatorio % 100
  numeroAleatorio = numeroAleatorio + 1
  return numeroAleatorio
}
