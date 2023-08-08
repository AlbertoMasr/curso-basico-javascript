// Declaración e inicialización de un arreglo de objetos
let furnitures = [
    { name: 'Table', price: 100, stock: 10 },
    { name: 'Chair', price: 50, stock: 20 },
    { name: 'Sofa', price: 200, stock: 5 },
    { name: 'Bed', price: 150, stock: 0 }
]

console.log(furnitures);

// Filtrar arreglos de objetos por precio menor a 150
let lowerPrice = furnitures.filter(function (furniture) {
    return furniture.price < 150;
});

console.log(lowerPrice);

// Mapear arreglos de objetos por nombre
let namesFurnitures = furnitures.map(function (furniture) {
    return furniture.name;
})

console.log(namesFurnitures);

// Encontrar arreglo de objetos por nombre
let findFurniture = furnitures.find(function (furniture) {
    return furniture.name === 'Chair';
})

console.log(findFurniture);

// Encontrar arreglo de objetos si hay alguno que no esté en stock
let outOfStock = furnitures.some(function (furniture) {
    return furniture.stock === 0;
})

console.log(outOfStock);

// Mostrar el nombre de todo el arreglo de objetos
furnitures.forEach(function (furniture) {
    console.log(furniture.name);
})