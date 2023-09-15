const s = parseInt(prompt("Ingrese el tamaño del espiral: "));
if (isNaN(s) || s <= 0) {
    console.log("Por favor, ingrese un número válido y positivo.");
} else {
    let espiral = Array.from({ length: s }, () => Array(s).fill(" "));
    let contador = 1;
    let filaInicio = 0;
    let filaFin = s - 1;
    let columnaInicio = 0;
    let columnaFin = s - 1;

    while (contador <= s * s) {
        for (let i = columnaInicio; i <= columnaFin; i++) {
            espiral[filaInicio][i] = "═";
            contador++;
        }
        filaInicio++;

        for (let i = filaInicio; i <= filaFin; i++) {
            espiral[i][columnaFin] = "║";
            contador++;
        }
        columnaFin--;

        for (let i = columnaFin; i >= columnaInicio; i--) {
            espiral[filaFin][i] = "═";
            contador++;
        }
        filaFin--;

        for (let i = filaFin; i >= filaInicio; i--) {
            espiral[i][columnaInicio] = "║";
            contador++;
        }
        columnaInicio++;
    }

    for (let fila = 0; fila < s; fila++) {
        console.log(espiral[fila].join(""));
    }
}
