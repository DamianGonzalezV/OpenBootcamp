// Notación
// ; -> Delimitar el final de una linea

const b = 4;
console.log(b + 4);

// . -> Se utiliza en los objetos para acceder a los atributos
let tienda = {
    azucar: 4,
    sal: 5,
    atun: 23,
}

console.log(tienda.atun);
/* Estamos accediendo con el . al objeto tienda 
para consultar la cantidad de atun */


// {} -> LLaves para objetos, funciones y estructuras de control
const tienda2 = {
    habas: 2,
    oregano: 5,
    lechugaOrejona: 6
}

console.log(tienda2.lechugaOrejona);


// [] -> listas, arreglos, o arrays
const ar = [1, 2, 3, 4]
console.log(ar[2])
/* Lo usamos para declarar el arreglo y despues para 
acceder al numero 2 del arreglo, con index en 0 */


// () -> Funciones
function suma(a, b) {
    return(a + b);
}

console.log(suma(5, 6));




