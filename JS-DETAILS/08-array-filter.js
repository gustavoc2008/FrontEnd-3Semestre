// Utilizando para filtrar um elemento dentro de um array. Retorna apenas o encontrado
const numbers = [5, 10, 15]

const found = numbers.filter((n) => {
    return n == 10;
});

// console.log(found);

const stock = [
    {
        description : "Polo Shirt",
        color : "Green",
        profile : "M",
        amounty : 10
    },
    {
        description : "Polo Shirt",
        color : "Yellow",
        profile : "F",
        amounty : 15
    },
    {
        description : "Polo Shirt",
        color : "Blue",
        profile : "M",
        amounty : 30
    },
    {
        description : "Polo Shirt",
        color : "Purple",
        profile : "F",
        amounty : 5
    }
];

const camisasFemininas = stock.filter((product) => {
    return product.profile == "F";
});

console.log(camisasFemininas);

console.log("Women's Polo Shirt in Stock: ");
console.log();
//Utilizar o foreach e exibir os textos conforme o exemplo
//"Amarelo": 10 unidade(S)
//"Roxa": 10 unidade(S)
camisasFemininas.forEach((item) => {
    console.log(`${item.color}: ${item.amounty} unit(s)`);
});



