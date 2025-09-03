let nombresLista = []; //Se almacena los nombres

function asignarTexto(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

/*
Vamos a primero a empezar a interactuar primero con el boton inciar de "Añadir", por lo que vamos a crear la Fusion "AgregarAmigo"
*/
function AgregarFriend() {
  //getElementById == Obtener el elemento
  let nameFriend = document.getElementById("valorAmigo").value;
  let nombre = nameFriend.value.trim();

  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  amigos.push(nombre); //Agrega el nombre a la Array
  mostrarLista(); //Actualiza la lista
  nameFriend.value = ""; //Limpia el campo de texto inmediatamente

  return;
}

function mostrarLista() {
  let lista = document.getElementById("listaAmigos"); //Convertimos el ID en una variable en JS para poder interactuar con el codigo
  lista.innerHTML = ""; //Limpia la lista antes de volver a imprimirtla
}
