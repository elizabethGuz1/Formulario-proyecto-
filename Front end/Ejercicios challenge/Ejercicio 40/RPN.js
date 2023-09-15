function evaluarRPN(expresion) {

    let nums = [];
    
    let partes = expresion.split(" ");
  
    for(let i = 0; i < partes.length; i++) {
  
      let parte = partes[i];
  
      if(!isNaN(parte)) {
        nums.push(Number(parte));
      }
      else if(parte == "+") {
        let res = nums.pop() + nums.pop();
        nums.push(res);
      }
      else if(parte == "-") {
        let res = nums.pop() - nums.pop();
        nums.push(res);
      }
      else if(parte == "*") {
        let res = nums.pop() * nums.pop();
        nums.push(res);  
      }
      else if(parte == "/") {
        let res = nums.pop() / nums.pop();
        nums.push(res);
      }
  
    }
  
    return nums[0];
  
  }
 
  let resultado = evaluarRPN("3 4 +"); 
  console.log(resultado);