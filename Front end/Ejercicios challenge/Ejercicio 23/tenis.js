
let p1 = 0;
let p2 = 0;

//  puntos
const puntos = ["P1","P1","P2","P2","P1","P2","P1","P1"];

for(let i = 0; i < puntos.length; i++) {

  if(puntos[i] == "P1") {
    p1++;
  } else if(puntos[i] == "P2") {
    p2++;
  }

  // puntuación actual
  let score = "";
  if(p1 == 0) {
    score += "Love";
  } else if (p1 == 1) {
    score += "15";
  } else if(p1 == 2) {
    score += "30";
  } else if(p1 == 3) {
    score += "40";
  }

  score += " - ";

  if(p2 == 0) {
    score += "Love";
  } else if (p2 == 1) {
    score += "15";
  } else if(p2 == 2) {
    score += "30";
  } else if(p2 == 3) {
    score += "40";
  }
  
  console.log(score);

  if(p1 > 3 && p1-p2 >= 2) {
    console.log("Ha ganado el P1");
    break; 
  } else if(p2 > 3 && p2-p1 >= 2) {
    console.log("Ha ganado el P2");
    break; 
  } else if(p1 == p2 && p1 >= 3) {
    console.log("Deuce");
  }

}