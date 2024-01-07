"use strict";
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
//agregar al final del arreglo
meses.push('Julio'); // agrega al final
meses.push('Agosto');
console.log(meses);
//*************** */
const compras = []; // array vacio para llenarlo
const producto = {
    nombre: "Chaqueta",
    precio: 100,
};
const producto2 = {
    nombre: "Camisa",
    precio: 50,
};
const producto3 = {
    nombre: "Zapato",
    precio: 80,
};
compras.push(producto);
compras.push(producto2);
compras.unshift(producto3);
console.table(compras);
console.log(compras);
//---------------------
let resultado;
resultado = [...compras, producto]; //anadimos a compras el producto
resultado = [...resultado, producto2]; //anadimos mas producto a resultado
resultado = [producto3, ...resultado]; //anadimos producto3 delante del los productos del resultado
console.log(resultado);
console.table(resultado);
