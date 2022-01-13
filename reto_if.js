var piedra = 1;
var papel = 0;
var tijera = 1;

/*
Los valores de las variables piedra, papel y tijeras esta definidos por "1" o "0" (true o false). Para que la función de un ganador se debe ingresar valores de "1" a 2 variables y la otra variable debe quedar en "0".
*/

function ganador() {
    if (piedra == true && papel == true && tijera == false) {
        console.log("Gana papel");
    }
    else if (piedra == true && papel == false && tijera == true) {
        console.log("Gana piedra");
    }
    else if (piedra == false && papel == true && tijera == true) {
        console.log("Gana tijera");
    } else {
        console.log("No hay ganador, inténtelo de nuevo");
    }
}

ganador();