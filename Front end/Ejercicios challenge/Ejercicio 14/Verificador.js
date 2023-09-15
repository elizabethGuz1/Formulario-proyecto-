
var contraseña = prompt("Ingresa una contraseña:");

var longitudValida = contraseña.length >= 8;
var tieneMayuscula = /[A-Z]/.test(contraseña);
var tieneMinuscula = /[a-z]/.test(contraseña);
var tieneNumero = /[0-9]/.test(contraseña);

if (longitudValida && tieneMayuscula && tieneMinuscula && tieneNumero) {
    console.log("Contraseña válida");
} else {
    console.log("La contraseña no cumple con los requisitos:");

    if (!longitudValida) {
        console.log("Debe tener al menos 8 caracteres.");
    }
    if (!tieneMayuscula) {
        console.log("Debe contener al menos una letra mayúscula.");
    }
    if (!tieneMinuscula) {
        console.log("Debe contener al menos una letra minúscula.");
    }
    if (!tieneNumero) {
        console.log("Debe contener al menos un número.");
    }
}
