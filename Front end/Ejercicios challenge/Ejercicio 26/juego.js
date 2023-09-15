function juego(jugadas) {

    let ganaJugador1 = 0;
    let ganaJugador2 = 0;
  
    for(let i = 0; i < jugadas.length; i++) {
  
      let j1 = jugadas[i][0];
      let j2 = jugadas[i][1];
  
      if(
        (j1 == "piedra" && (j2 == "tijera" || j2 == "lagarto")) || 
        (j1 == "papel" && (j2 == "piedra" || j2 == "spock")) ||
        (j1 == "tijera" && (j2 == "papel" || j2 == "lagarto")) ||
        (j1 == "lagarto" && (j2 == "papel" || j2 == "spock")) ||
        (j1 == "spock" && (j2 == "tijera" || j2 == "piedra"))
      ) {
        ganaJugador1++;
  
      } else if(j1 != j2) {
        ganaJugador2++;
      }
  
    }
  
    if(ganaJugador1 > ganaJugador2) {
      return "Player 1";
    } else if (ganaJugador1 < ganaJugador2) {
      return "Player 2";
    } else {
      return "Tie";
    }
  
  }
  juego
  let jugadas = [
    ["piedra","tijera"],
    ["papel","piedra"],
    ["tijera","spock"]];
  
  let ganador = juego(jugadas);
  console.log(ganador);