// Las funciones son procedimientos, un conjunto de sentencias o pasos que realizarán una tarea o cálculo con ciertos valores.

// Tenemos dos tipo de funciones en js, function Declaration y function Expression 

// el nombre reservado de function y parámetros que recibirá esa function 

function miFuncion() { // function declaration Declarativas expresión 
    return 3;
}

miFuncion(); // mandamos llamar la función

var miFuncion2 = function(a,b) {  // function Expression (también conocidas como funciones anónimas)
    return a + b;
}

miFuncion2(); // mandamos llamar la variable como función


/* ============================= */


function saludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);  // template strings (Plantillas de cadena de texto)
}


function suma(a,b) {  // está función recibe 2 parámetros, que se convierten en un placeholder de valores que se pueden utilizar dentro de la función.
    var resultado = a + b;
}

// Return, cómo regresamos un valor con una function.



function suma(a,b) {
    var resultado =  a + b;
    return resultado;
}

function suma(a,b) {
    return a + b;
}

suma(20, 30);