function ganador(piedra, papel, tijera) {
    
    if (papel == 1) {
        papel += 1;
    }
    if (tijera == 1) {
        tijera += 2;
    }
    var resultado = piedra + papel + tijera;

    switch (resultado) {
        case 3:
            console.log("Gana papel");
            break;
        case 4:
            console.log("Gana piedra");
            break;
        case 5:
            console.log("Gana tijera");
            break;
        default:
            console.log("No existe ganador, intentalo de nuevo");
            break;
    }
}

ganador(1, 0, 1); 
//Primer parámetro "Piedra", segundo parámetro "Papel" y tercer parámetro "Tijeras"