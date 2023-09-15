
function buscarSecuencias(numeros, objetivo) {

    let secuencias = []
  
    for(let i = 0; i < numeros.length; i++) {
  
      let suma = 0
      let secuencia = []
  
      for(let j = i; j < numeros.length; j++) {
        
        suma += numeros[j]
        secuencia.push(numeros[j])
  
        if(suma == objetivo) {
          secuencias.push(secuencia)
          break;
        }
  
        if(suma > objetivo) {
          break;
        }
  
      }
  
    }
  
    return secuencias
  
  }
  

  let nums1 = [1, 2, 3, 4, 5]
  let objetivo1 = 9
  
  console.log(buscarSecuencias(nums1, objetivo1))
  
  let nums2 = [10, 20, 30, 40,80,20]
  let objetivo2 = 60
  
  let secuencias = buscarSecuencias(nums2, objetivo2)
  console.log(secuencias)
