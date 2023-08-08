// Desclarar e inicializar un objeto
const car = {
    brand: 'Nissan',
    model: 'Versa',
    year: 2020,
    toString: function() {
        return `${this.brand} ${this.model} ${this.year}`;
    }
}

console.log(car.toString());

// Definir función constructora
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// Crear objeto con función constructora
const car2 = new Car('Nissan', 'Versa', 2020);
console.log(car2);