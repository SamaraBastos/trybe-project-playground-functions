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
  function hydrate() {
    // seu código aqui
  }

  module.exports = {
    generatePhoneNumber,
    hydrate,
    triangleCheck,
  }

