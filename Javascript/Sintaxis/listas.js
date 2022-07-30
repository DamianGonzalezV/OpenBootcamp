// Listas, array o arreglo

// Array mas utilizado, declarado con []
const lista = [1, "hola", true, undefined, null];
console.log(lista);


// Opción new Array, igual nos devuelve una lista
const lista2 = new Array(2, "iguanas", "geckos", "salamandras", "dragones", true, 4);
console.log(lista2);

// Array declarando los espacios
const lista3 = new Array(3);
lista3[0] = "Este es el primer espacio de la lista con index 0";
console.log(lista3[0]);
/* No podemos modificar el nombre de la constante pero
si las listas dentro del array */

// Arrays dentro de arrays
const lista4 = [["lista 0"],["lista 1"],["lista 2"]];
console.log(lista4);

// Objetos

const movil = {
    altura: "700px",
    anchura: "450px",
    marca: "Apple",
    so: "iOS",
    contactos: ["liza", "bart", "homero"],
    tarjeta: {
        almacenamiento: 128,
        marca: "samsung"
    },
    pixelesCamara: "200px",
    "horas-bateria": 28 /* estamos agregando un atributo con "" ya que tiene un guion, 
    su comportamiento sigue siendo de number */
}

/* Añadiendo una propieda al objeto */
movil.year = 2019;
console.log(movil.year);

/* Consultando una propiedad de un objeto dentro del objeto */
console.log(movil.tarjeta.marca);

/* Consultando una propiedad del objeto  */
console.log(movil.altura);

/* Lo que no se puede hacer 
movil = {};
cambiar la constante, el contenido dentro de la constante
es el que puede cambiar
*/

// Fechas

// Obtener la fecha actual
const ahora = new Date();
console.log(ahora);

// Obteniendo la fecha con milisegundos
const fecha_milis = new Date(2000000000000);
console.log(fecha_milis);

// Obteniendo la fecha con string
const fecha_cadena = new Date("12 10 2022"); /* Tenemos que indicara en string */
console.log(fecha_cadena);

// Obteniendo la fecha con valores, aquí usamos comas 
const fecha_valores = new Date(2021, 05, 20); /* Año / mes / día */
console.log(fecha_valores);


// Obteniendo uno a uno
const día = ahora.getDate();
console.log(día);

const mes = ahora.getMonth() + 1;
console.log(mes);

const year = ahora.getFullYear();
console.log(year);

// Ahora podemos unir nuestros resultados
console.log(día, mes, year);
