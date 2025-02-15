// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let nombres = [];

function agregarNombres() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim(); // Obtiene el valor del input

    if (nombre === "") {
        alert('Por favor inserta un nombre');
    } else if (nombres.includes(nombre)) {
        alert('Este nombre ya está en la lista');
    } else {
        nombres.push(nombre);
        input.value = ""; // Limpia el campo después de agregar
        mostrarNombres(); // Actualiza la lista
    }
}
function mostrarNombres() {
    let lista = document.getElementById('listaAmigos'); 
    lista.innerHTML = ""; // Limpia la lista antes de actualizar

    for (let i = 0; i < nombres.length; i++) {
        let item = document.createElement('li'); 
        item.textContent = nombres[i]; 
        lista.appendChild(item); 
    }
}
function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ""; // Limpia el resultado anterior

    if (nombres.length === 0) {
        resultado.textContent = "No hay nombres para sortear";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let ganador = nombres[indiceAleatorio];

    let item = document.createElement('li');
    item.textContent = `🎉 El amigo secreto es: ${ganador}!`;
    resultado.appendChild(item);
}






