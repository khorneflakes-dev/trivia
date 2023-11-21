function revisarRespuestas() {
    // console.log('boton revisarRespuesta funciona')

    // defino mi variable y capturo el evento de mis input radio
    let respuesta = document.querySelector('input[name="q1"]:checked');
    
    const respuesta_owo = document.getElementById('respuesta');
    
    // const respuesta_owo1 = document.getElementById('respuesta1');
    // const respuesta_owo2 = document.getElementById('respuesta2');

    if (!respuesta){
        respuesta_owo.innerHTML = 'Elije una opcion de la pregunta 1'
    }

    else if (respuesta.value == 'negro') {
        respuesta_owo.innerHTML = 'Respuesta 1 correcta'
        // console.log('respuesta correcta')
    } else {
        respuesta_owo.innerHTML = 'Respuesta 1 incorrecta'
        // console.log('respuesta incorrecta')
    }


}