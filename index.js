let expresion = "";
// se declara la variable expresion con un valor indefinido 
function limpiar() {
    // se crea la función limpiar
    expresion = "";
    // se le asigna un valor indefinido a la variable expresion
    actualizarPantalla();
    // se ejecuta la función actualizar pantalla
}

function concatenarResultado(numero) {
    // se crea la función concatenarResultado con el parámetro numero
    expresion += numero;
    // se utiliza += para ir concatenando el número que pulsemos
    actualizarPantalla();
    // se ejecuta la función actualizar pantalla
}
function concatenarOperador(operador) {
    // se crea la función concatenarOperador con el parámetro operador
    expresion += operador;
    // se utiliza += para ir concatenando el operador que pulsemos
    actualizarPantalla();
    // se ejecuta la función actualizar pantalla
}
function actualizarPantalla() {
    // se crea la función actualizarPantalla
    document.getElementById("display").value = expresion;
    // se le dice que vaya tomando los valores de los botones que están en el html y se los pase a la variable expresion 
}
function calcular() {
    // se crea la función calcular
    try {
        const resultado = eval(expresion);
        //se crea la constante resultado y se le asigna el valor
        expresion = resultado.toString();
        actualizarPantalla();
    } catch (error) {
        //si ocurre un error entra aquí
        console.log(error)
        // se imprime el mensaje error en la consola
    }
}
