// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos
//  strings tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(array) {
  let longestWord = "";
  for (let iterator of array) {
    if (iterator.length > longestWord.length) {
      longestWord = iterator;
    }
  }
  return longestWord;
}
console.log(findLongestWord(avengers));
