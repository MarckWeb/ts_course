"use strict";
const miCoche = {
    marca: 'Toyota',
    modelo: 'Corolla',
    anio: 2020,
    info: () => "Es un Toyota Corolla del año 2020."
};
console.assert(miCoche.marca === "Toyota");
console.assert(miCoche.modelo === "Corolla");
console.assert(miCoche.anio === 2020);
console.assert(miCoche.info() === "Es un Toyota Corolla del año 2020.");