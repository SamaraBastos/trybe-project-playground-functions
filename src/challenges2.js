// Desafio 11
function generatePhoneNumber(array) {
  let numeroDeTelefone = array
  let numeroDeTelefone1 = '(' + array[0] + array[1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10];
  let contador;
  let number;
  let bool = true;
  if (numeroDeTelefone.length !== 11 || numeroDeTelefone === 0) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let index = 0; index < numeroDeTelefone.length; index += 1) {
      number = numeroDeTelefone[index];
      contador = 0;
      for (let index = 0; index < numeroDeTelefone.length; index += 1) {
        if (number == numeroDeTelefone[index])
          contador += 1;
      }
      for (let index = 1; index < numeroDeTelefone.length; index += 1) {
        if (numeroDeTelefone[index] < 0) {
          return 'não é possível gerar um número de telefone com esses valores';
        } else if (numeroDeTelefone[index] > 9) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
        for (let f = 0; f < array.Length; f += 1) {
          if (array[index] === array[f]) {
            contador += 1;
          }
        } for (n of numeroDeTelefone) {
          if (n < 0 || n > 9 || contador >= 3) {
            bool = true;
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
      }
    }
  }
  return numeroDeTelefone1;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB + lineC) && lineB < Math.abs(lineA + lineC) && lineC < Math.abs(lineA + lineB)) {
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

