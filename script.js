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

const respuestas_comida  = ['lasagna',   'creme',  'aguacate']
// este es solo un ejemplo, el array real es respuestas
const respuestas_usuario = ['lasagna','pescado','limon']

function revisarRespuesta(){
    // recoges los elementos dentro del div con id preguntas_comida que sean inputradio y esten tickeadas
    // y los estoy metiendo en un array
    let respuestas_array = document.querySelectorAll('#preguntas_comida input[type="radio"]:checked');
    
    // ejecutamos un ciclo for each para iterar sobre cada respuesta

    let puntaje = 0

    function evaluar(respuesta, indice) {

        if (respuestas_comida[indice] == respuestas_array[indice].value){
            puntaje = puntaje + 5
            console.log(`tu puntaje hasta la pregunta ${indice + 1} es ${puntaje}`)
        } else {
            console.log(`tu puntaje hasta la pregunta ${indice + 1} es ${puntaje}`)
        }
    }

    // aqui ejecuto el ciclo for en respuestas_array para comparar las respuestas del usuario con las respuestas correctas
    respuestas_array.forEach(evaluar)

    // aqui ya tengo el nuevo valor del puntaje, dependiendo de cuantas correctas tenga el usuario
    console.log(puntaje)
}

// if (respuestas_comida[0] == respuestas_usuario[0]) {
//     console.log('correcto')
// } else{
//     console.log('incorrecto')
// }

// para obtener un elemento de un array podemos usar indices
// respuestas_comida[0] = 'lasagna'

// elementos de un array para un ciclo for
// (element, index, array)
// los mas usados son los 2 primeros, element e index

// function imprimir_comida(comida, posicion){
//     console.log(`tu comida es: ${comida}, indice: ${posicion}`)
// }

// // paso1, llamamos al array
// // paso2, llamamos al metodo forEach
// // paso3, llamamos a mi funcion personalizada
// respuestas_comida.forEach(imprimir_comida)