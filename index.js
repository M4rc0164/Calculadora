
let expresion = ""; // se declara la variable expresion con un valor indefinido 

/**
 * @description Función que limpia pantalla
 */
function limpiar() { 
    expresion = ""; // se le asigna un valor indefinido a la variable expresion
    actualizarPantalla(); // se ejecuta la función actualizar pantalla
}

/**
 *@params Recibe un parámetro de tipo número
 *@description función concatenarResultado 
 * */
function concatenarResultado(numero) {
    expresion += numero; // se utiliza += para ir concatenando el número que pulsemos
    actualizarPantalla(); // se ejecuta la función actualizar pantalla
}

/**
 *@params Recibe un string de nombre operador
 *@description función concatenarOperador 
 * */
function concatenarOperador(operador) {
    expresion += operador;  // se utiliza += para ir concatenando el operador que pulsemos
    actualizarPantalla(); // se ejecuta la función actualizar pantalla
}

/**
 * @description función actualizarPantalla
 */
function actualizarPantalla() { 
    document.getElementById("display").value = expresion; // se le dice que vaya tomando los valores de los botones que están en el html y se los pase a la variable expresion 
}

/**
 * @description función calcular
 */
function calcular() { 
    try {
        const resultado = eval(expresion); //se crea la constante resultado
        expresion = resultado.toString(); //convierte el resultado en un string 
        actualizarPantalla(); //se imprime el string en la pantalla
    } catch (error) { //si ocurre un error entra aquí
        console.log(error) // se imprime el mensaje error en la consola    
    }
}
