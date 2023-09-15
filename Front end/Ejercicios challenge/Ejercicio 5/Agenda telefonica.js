const agendaTelefonica = {};

// contactos
agendaTelefonica["Juan"] = "1234567890"
agendaTelefonica["María"] = "9876543210"
agendaTelefonica["Carlos"] = "5555555555"

// Buscar un contacto en la agenda
const nombreABuscar = prompt("Ingresa el nombre del contacto:")


if (agendaTelefonica[nombreABuscar] !== undefined) {
    const numeroTelefono = agendaTelefonica[nombreABuscar]
    console.log(`El número de teléfono de ${nombreABuscar} es: ${numeroTelefono}`)
} else {
    console.log(`El contacto ${nombreABuscar} no se encontró en la agenda.`)
}
