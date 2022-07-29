
// Constante
const constante = "Hola soy una constante";
console.log(constante);

// constante = "Hola soy la nueva constante";
/* Nos da error porque a una constante no se le 
puede cambiar el valor */

// Variables
var a = 1;
console.log(a);

a = 4;
console.log(a);
/* A una variable si le podemos cambiar el valor,
como su nombre lo indica, estás varían */

// Let
let b = 3;
console.log(b);

b = 12;
console.log(b);
/* A let, al igual que var si le podemos cambiar el valor */

// Diferencia entre var y let

//var

var variable = "Hola soy una variable VAR"

for(var i = 0; i <3; i++) {
    var variable = "Soy la segunda variable"
}

console.log(variable);

// let
let variableLet = "Hola soy una variable VAR"

for(let i = 0; i <3; i++) {
    let variableLet = "Soy la segunda variable"
}

console.log(variableLet);

// Escritura dinamica
/* JS nos permite cambiar el tipo de dato con la escritura dinamica, 
sin embargo esto no es recomendable */

var num = 4;
console.log(typeof(num));

num = "Hola soy el nuevo num";
console.log(typeof(num));

/* Como el operador typeof nos muestra, var pasó
de number a string por la escritura dinamica */


// var

function foo(){
    
    
    for(var i = 0; i < 10; i++){
        var mensaje = "Hola";
        console.log(i);
    }

    console.log(mensaje);
}

foo()

// let

function foo(){
    
    
    for(var i = 0; i < 10; i++){
        let mensajeLet = "Hola";
        console.log(i);
        console.log(mensajeLet);
    }
}

foo()

// var

function foo(){
    
    
    console.log(d);
    var d = 1;
    

}

foo()



