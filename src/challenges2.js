// Desafio 11
function generatePhoneNumber() {
}

  // Desafio 12
  function triangleCheck(lineA, lineB, lineC) {
    if(lineA < Math.abs(lineB + lineC) && lineB < Math.abs(lineA + lineC) && lineC < Math.abs(lineA + lineB)){
   return true;
   } 
   return false;
  }


// Desafio 13
function hydrate(string) {
  let num = string.replace(/\D/gim, '');
  let resultado = 0;

  for (let n of num) {
    resultado += Number(n);
  }
  if (resultado === 1) {
    return `${resultado} copo de água`
  }
  return `${resultado} copos de água`;
}

  module.exports = {
    generatePhoneNumber,
    hydrate,
    triangleCheck,
  }

