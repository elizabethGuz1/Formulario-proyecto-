const dimension = 20;
const velocidad = 500;

let serpiente = [{ x: 10, y: 10 }];
let comida = { x: 5, y: 5 };
let direccion = "derecha";
let crecer = false;

function crearTablero() {
    const juego = document.getElementById("juego");

    for (let i = 0; i < dimension; i++) {
        for (let j = 0; j < dimension; j++) {
            const celda = document.createElement("div");
            celda.className = "celda";
            celda.id = `celda-${i}-${j}`;
            juego.appendChild(celda);
        }
    }
}

function pintarSerpiente() {
    serpiente.forEach(segmento => {
        const celda = document.getElementById(`celda-${segmento.x}-${segmento.y}`);
        celda.classList.add("serpiente");
    });
}

function pintarComida() {
    const celda = document.getElementById(`celda-${comida.x}-${comida.y}`);
    celda.classList.add("comida");
}

function mover(direccionNueva) {
    if (direccionNueva === "arriba" && direccion !== "abajo") {
        direccion = "arriba";
    } else if (direccionNueva === "abajo" && direccion !== "arriba") {
        direccion = "abajo";
    } else if (direccionNueva === "izquierda" && direccion !== "derecha") {
        direccion = "izquierda";
    } else if (direccionNueva === "derecha" && direccion !== "izquierda") {
        direccion = "derecha";
    }
}

function moverSerpiente() {
    const cabeza = Object.assign({}, serpiente[0]);

    switch (direccion) {
        case "arriba":
            cabeza.x--;
            break;
        case "abajo":
            cabeza.x++;
            break;
        case "izquierda":
            cabeza.y--;
            break;
        case "derecha":
            cabeza.y++;
            break;
    }

    serpiente.unshift(cabeza);

    if (!crecer) {
        const cola = serpiente.pop();
        const celda = document.getElementById(`celda-${cola.x}-${cola.y}`);
        celda.classList.remove("serpiente");
    } else {
        crecer = false;
    }

    if (cabeza.x === comida.x && cabeza.y === comida.y) {
        crecer = true;
        comida = generarComida();
        const celdaComida = document.getElementById(`celda-${comida.x}-${comida.y}`);
        celdaComida.classList.remove("comida");
    }
}

function generarComida() {
    let x, y;
    do {
        x = Math.floor(Math.random() * dimension);
        y = Math.floor(Math.random() * dimension);
    } while (serpiente.some(segmento => segmento.x === x && segmento.y === y));

    return { x, y };
}

function verificarChoque() {
    const cabeza = serpiente[0];

    if (
        cabeza.x < 0 || cabeza.x >= dimension ||
        cabeza.y < 0 || cabeza.y >= dimension ||
        serpiente.slice(1).some(segmento => segmento.x === cabeza.x && segmento.y === cabeza.y)
    ) {
        clearInterval(intervalo);
        alert("¡Perdiste! Inténtalo de nuevo.");
        reiniciarJuego();
    }
}

function reiniciarJuego() {
    serpiente = [{ x: 10, y: 10 }];
    comida = generarComida();
    direccion = "derecha";
    crecer = false;
    intervalo = setInterval(actualizarJuego, velocidad);

    const celdas = document.querySelectorAll(".celda");
    celdas.forEach(celda => celda.classList.remove("serpiente", "comida"));
    pintarSerpiente();
    pintarComida();
}

function actualizarJuego() {
    moverSerpiente();
    verificarChoque();

    const celdas = document.querySelectorAll(".celda");
    celdas.forEach(celda => celda.classList.remove("serpiente", "comida"));

    pintarSerpiente();
    pintarComida();
}

let intervalo = setInterval(actualizarJuego, velocidad);
crearTablero();

const arribaBtn = document.getElementById("arriba");
const abajoBtn = document.getElementById("abajo");
const izquierdaBtn = document.getElementById("izquierda");
const derechaBtn = document.getElementById("derecha");

arribaBtn.addEventListener("click", () => {
    mover("arriba");
});

abajoBtn.addEventListener("click", () => {
    mover("abajo");
});

izquierdaBtn.addEventListener("click", () => {
    mover("izquierda");
});

derechaBtn.addEventListener("click", () => {
    mover("derecha");
});

document.addEventListener("keydown", event => {
    if (event.key === "ArrowUp") {
        mover("arriba");
    } else if (event.key === "ArrowDown") {
        mover("abajo");
    } else if (event.key === "ArrowLeft") {
        mover("izquierda");
    } else if (event.key === "ArrowRight") {
        mover("derecha");
    }
});
