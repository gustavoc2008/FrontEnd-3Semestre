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

//reduz o array a um unico elemento. No caso um somatorio, por exemplo:
let totalShirtInStock = stock.reduce((total, product) => {
    return total + product.amounty;
}, 0);

console.log(`Total Shirts in Stock: ${totalShirtInStock}`);
