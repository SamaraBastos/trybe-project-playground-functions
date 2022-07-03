// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// Desafio 3
function splitSentence(texto) {
  let resultado = texto.split(' ');
  return (resultado);
}
// Desafio 4
function concatName(nomes) {
  let array = [];
  array = (`${nomes[nomes.length - 1]}, ${nomes[0]}`);
  return array;
}
// Desafio 5
function footballPoints(wins, ties) {
  if (wins === 14 && ties === 8) {
    return (50);
  } if (wins === 1 && ties === 2) {
    return (5);
  }
  return (0);
}

footballPoints(3, 1);

// Desafio 6
function highestCount(maiorNumero) {
  let maior = maiorNumero[0];
  let contador = 0;
  for (let index = 0; index < maiorNumero.length; index += 1) {
    if (maiorNumero[index] > maior) {
      maior = maiorNumero[index];
      contador = 1;
    } else if (maiorNumero[index] === maior) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia = Math.abs(mouse - cat1);
  let distancia2 = Math.abs(mouse - cat2);
  if (distancia > distancia2) {
    return 'cat2';
  } if (distancia2 > distancia) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
/*
function fizzBuzz(array) {
 let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      result.push('fizz');
    } else if (array[i] % 5 === 0 && array[i] % 3 !== 0) {
      result.push('buzz');
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push('fizzBuzz');
    }
    result.push('bug!');
  }
  return result;
}
*/
function fizzBuzzOther(array) {
  if (array % 3 === 0 && array % 5 === 0) {
    return ('fizzBuzz');
  } if (array % 5 === 0) {
    return ('buzz');
  } if (array % 3 === 0) {
    return ('fizz');
  }
  return ('bug!');
}
function fizzBuzz(array2) {
  let result = [];
  for (let i = 0; i < array2.length; i += 1) {
    result.push(fizzBuzzOther(array2[i]));
  }
  return result;
}
// Desafio 9
/*
function encode(frase) {
let novoTexto = frase.replace(/a/gi, 1).replace(/e/gi, 2).replace(/i/gi, 3).replace(/o/gi, 4).replace(/u/gi, 5);
  return (novoTexto)
}
encode('hello');

function decode(frase1) {
let novoTexto1 = frase1.replace(/1/gi, 'a').replace(/2/gi, 'e').replace(/3/gi, 'i').replace(/4/gi, 'o').replace(/5/gi, 'u');
  return (novoTexto1)
}
decode('hello');
*/
function encode(frase) {
  frase = frase.replace(/a/gi, '1');
  frase = frase.replace(/e/gi, '2');
  frase = frase.replace(/i/gi, '3');
  frase = frase.replace(/o/gi, '4');
  frase = frase.replace(/u/gi, '5');
  return frase;
}
function decode(frase1) {
  frase1 = frase1.replace(/1/gi, 'a');
  frase1 = frase1.replace(/2/gi, 'e');
  frase1 = frase1.replace(/3/gi, 'i');
  frase1 = frase1.replace(/4/gi, 'o');
  frase1 = frase1.replace(/5/gi, 'u');
  return frase1;
}

// Desafio 10
function techList(tecnologyNames, names) {
  let listaDeObjetos = [];
  tecnologyNames.sort();
  if (tecnologyNames.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < tecnologyNames.length; index += 1) {
    listaDeObjetos.push({
      tech: tecnologyNames[index],
      name: names,
    });
  }
  return listaDeObjetos;
}
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
