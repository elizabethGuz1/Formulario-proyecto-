
function validarDireccionEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const direccionEmail = "correo123@gmail.com"

// Comprobar 
if (validarDireccionEmail(direccionEmail)) {
    console.log(`La dirección de correo electrónico "${direccionEmail}" es válida.`)
} else {
    console.log(`La dirección de correo electrónico "${direccionEmail}" no es válida.`);
}
