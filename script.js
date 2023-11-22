function saludarJugador(){

    // caputra el valor del nombre del jugador del input text
    let jugador = document.getElementById('nombre_jugador').value;

    // capturamos el id del parrafo donde renderizaremos el saludo
    let saludo_p = document.getElementById('saludo');

    // si el usuario no dio ningun nombre se dispara una alerta
    if (!jugador) {
        alert('ingresa tu nombre para jugar!')
    }
    else if (jugador) {
        saludo_p.innerHTML = `Saludos ${jugador}`
        document.getElementById("pantalla1").style.display = "none"
        document.getElementById("pantalla2").style.display = "block"
    }
}