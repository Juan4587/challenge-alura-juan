// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let nombres = [];


function agregarNombres () {
    let nombre = prompt('Nombres de amigo secreto : ');
    
    if (nombre === ""){
        alert('Por favor inserta un nombre!')
    }else if (nombres.includes(nombre)){
        alert('Este nombre ya está en la lista');}
    else{
        nombres.push(nombre)
    }
        
        
        nombres.push(nombre)


        console.log(nombres)};
    if (nombres.includes(nombre)){
        nombre.push}
    else {
        alert('Este nombre ya está en la lista');
    }
    }

    let nombres = [];

    function agregarNombres() {
      let nombre = prompt('Nombres de amigo secreto: ');
      
      if (nombre === "") {
        alert('Por favor inserta un nombre!');
      } else if (nombres.includes(nombre)) {
        alert('Este nombre ya está en la lista');
      } else {
        nombres.push(nombre);
        console.log('Nombres actuales:', nombres);
      }
    }




