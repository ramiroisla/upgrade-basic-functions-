//Calcular un promedio es una tarea extremadamente común.
//Puedes usar este array para probar tu función:
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(array) {
  let number = 0;
  let lengthNumbers = array.length;
  for (const index of array) {
    number += index;
  }
  return number/total;
}
console.log(average(numbers));
