// Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
// en caso que existan los elimina para retornar un array sin los elementos duplicados.
const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

function removeDuplicates(param) {
  let newArray = [];
  for (const iterator of param) {
    if (!newArray.includes(iterator)) {
      newArray.push(iterator);
    }
  }
  return newArray;
}
console.log(removeDuplicates(duplicates));
