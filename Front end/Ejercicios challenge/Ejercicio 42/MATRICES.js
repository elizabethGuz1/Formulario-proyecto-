
function cruzarMatrices(a, b) {

    let resultado = [];
  
    for(let i = 0; i < a.length; i++) {
  
      resultado.push([]);
  
      for(let j = 0; j < a[i].length; j++) {
        
        if(a[i][j] % 2 != 0 && b[i][j] % 2 == 0) {
          resultado[i].push("X");  
        }
        else if(a[i][j] % 2 == 0 && b[i][j] % 2 == 0) {
          resultado[i].push("O");
        }
        else {
          resultado[i].push("-");
        }
  
      }
  
    }
  
    return resultado;
  
  }
  
 
  let a = [[1, 2], [3, 4]];
  let b = [[2, 3], [4, 5]];
  
  console.log(cruzarMatrices(a, b));