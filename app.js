let nombresLista = []; //Se almacena los nombres

/*
Vamos a primero a empezar a interactuar primero con el boton inciar de "Añadir", por lo que vamos a crear la Fusion "AgregarAmigo"
y vamos a tomar los valores que entren llamandolos con "document.getElementById" esto ayuda a poder interactuar con los elemento en el JS.
Se crea una lista para guardar estos elementos, haciendo cada una de su verificaciones.
*/

function AgregarFriend() {
  //getElementById == Obtener el elemento
  let nameFriend = document.getElementById("valorAmigo");
  let nombre = nameFriend.value.trim(); //trim = elimina espacios en blanco al inicio y al final MUY IMPORTANTE

  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
  } else {
    nombresLista.push(nombre); //Agrega el nombre a la Array
    mostrarLista(); //Actualiza la lista
    nameFriend.value = ""; //Limpia el campo de texto inmediatamente
  }

  return;
}

function mostrarLista() {
  let lista = document.getElementById("listaAmigos"); //Convertimos el ID en una variable en JS para poder interactuar con el codigo
  lista.innerHTML = ""; //Limpia la lista antes de volver a imprimirtla en pantalla

  nombresLista.forEach((nombresLista) => {
    //forEach = recorrer listas de forma más limpias
    let list2 = document.createElement("list2");
    list2.textContent = nombresLista;
    lista.appendChild(list2); //Lo agrega como si fuera un hijo ya que esta escrito en html (h1(Lista de amigos) : h2(Carlos) : h2(Isaac))
  });
}

function sortearAmigo() {
  if (nombresLista.length === 0) {
    alert("No hay amigos en la lista para sortear");
  }

  let eleccionAleatoria = Math.floor(Math.random() * nombresLista.length);
  let Ganador = nombresLista[eleccionAleatoria];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li> El amigo secreto es: <strong>${Ganador}</strong></li>`;
}
