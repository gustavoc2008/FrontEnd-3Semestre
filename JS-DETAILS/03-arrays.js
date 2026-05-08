let frutasVermelhas = new Array();
let frutasCitricas = ["Limao", "Laranja", "Abacaxi", "Acerola", "Tangerina"];

frutasVermelhas.push("Morango");
frutasVermelhas.push("Maca");
frutasVermelhas.push("Amora");
frutasVermelhas.push("Cereja");

console.log(frutasCitricas);
console.log(frutasVermelhas);
const frutaRemovida = frutasVermelhas.pop(); //retira o ultimo elemento do array
console.log(frutasVermelhas);

console.log(`${frutaRemovida} foi removida da cesta de fruta!`);
