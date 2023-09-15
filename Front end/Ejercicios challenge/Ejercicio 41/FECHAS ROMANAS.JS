function fechaRomana(fecha) {
    
    const numerosRomanos = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const decenasRomanas = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const centenasRomanas = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const milesRomanos = ["M", "MM", "MMM"]


    const [dia, mes, anio] = fecha.split("-").map(Number)

   
    if (isNaN(dia) || isNaN(mes) || isNaN(anio) || dia < 1 || dia > 31 || mes < 1 || mes > 12 || anio < 1 || anio > 3999) {
        return "Fecha no válida"
    }

    const diaRomano = numerosRomanos[dia - 1] || ""
    const mesRomano = decenasRomanas[Math.floor(mes / 10) - 1] + numerosRomanos[mes % 10 - 1] || "";
    const anioRomano = milesRomanos[Math.floor(anio / 1000) - 1] || "";
    const centenaRomana = centenasRomanas[Math.floor((anio % 1000) / 100) - 1] || ""
    
    return `${diaRomano}-${mesRomano}-${anioRomano}${centenaRomana}`
}

console.log(fechaRomana("17-10-2011"))
console.log(fechaRomana("25-09-1897"))
console.log(fechaRomana("32-13-4000"))
