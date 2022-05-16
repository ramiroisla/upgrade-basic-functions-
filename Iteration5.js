const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(param) {
  let suma = 0;
  param.forEach(function (valor) {
    if (typeof valor === "string") {
      suma += valor.length;
    } else if (typeof valor === "number") {
      suma += valor;
    }
  });
  return suma;
}

const total = averageWord(mixedElements);

console.log(total);

console.log(averageWord(mixedElements));
