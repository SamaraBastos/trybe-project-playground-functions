// Desafio 11
function generatePhoneNumberThree(i, count, array) {
  for (let s of array) {
    if (s === i) {
      count += 1;
    }
  }
  if (count >= 3) {
    return true;
  }
}

function generatePhoneNumberTwo(array) {
  let count;
  for (let i of array) {
    count = 0;
    if (generatePhoneNumberThree(i, count, array) || i > 9 || i < 0) {
      return true;
    }
  }
  return false;
}
function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (generatePhoneNumberTwo(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let number = `(${array[0]}${array[1]}) `;
  let number2 = `${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}`;
  let number3 = `-${array[7]}${array[8]}${array[9]}${array[10]}`;
  let telephone = number + number2 + number3;
  return telephone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < Math.abs(lineB + lineC)
    && lineB < Math.abs(lineA + lineC)
    && lineC < Math.abs(lineA + lineB)) {
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
    return `${resultado} copo de água`;
  }
  return `${resultado} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
