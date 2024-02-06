
const mostrarImagen = (imagen) => {
  let pantalla = document.getElementById("screen")
  if (pantalla.classList.contains("on")) {

    let imgElement = document.createElement("img");// Crea un elemento de imagen

    imgElement.src = "img/" + imagen; // Para establecer la fuente de la imagen

    // Para establece atributos como alto y ancho
    imgElement.alt = "Loading";
    imgElement.width = 720;
    imgElement.height = 449;
    imgElement.style.borderRadius = "0px 0px 4px 4px"

    cleanScreen();

    document.getElementById("screen").appendChild(imgElement);   // Agregar la imagen al screen
  }
}

const mostrarCifra = (numero) => {
  let pantalla = document.getElementById("screen");
  if (pantalla.classList.contains("on")) {
    let channelDiv = document.getElementById("channel");
    channelDiv.innerHTML = numero
  }
}

const onOff = () => {
  let pantalla = document.getElementById("screen");
  if (pantalla.classList.contains("on")) {  // Compruebo si la pantalla esta encendida
    pantalla.classList.remove("on") // Quito ON si estuviera encendida
    pantalla.classList.add("off")     // Añado off para apagarla
    fechaYHora.style.display = "none"; // Oculto la fecha cuando la tv está off
    cleanScreen();
    let channelDiv = document.getElementById("channel");
    channelDiv.innerHTML = ""
  } else {
    pantalla.classList.add("on"); // Enciendo la pantalla
    pantalla.classList.remove("off");
    fechaYHora.style.display = "block"; // Muestro la fecha cuando la tv está on
  }
}

const cleanScreen = () => {
  let imagenAnterior = document.getElementById("screen").querySelector("img");
  if(imagenAnterior) {
    document.getElementById("screen").removeChild(imagenAnterior); 
  }
}


let actualizarFechaYHora = () => {

  var fechaYHoraActual = new Date();

  // Para obtener año, mes, día ,etc
  var year = fechaYHoraActual.getFullYear();
  var month = fechaYHoraActual.getMonth() + 1; // Los meses van de 0 a 11, por eso se suma 1
  var day = fechaYHoraActual.getDate();

  var hours = fechaYHoraActual.getHours();
  var minutes = fechaYHoraActual.getMinutes();
  var seconds = fechaYHoraActual.getSeconds();

  var fechaYHoraFormateada = day + ' / ' + month + ' / ' + year + ' - ' + hours + ':' + minutes + ':' + seconds;

  var divFechaYHora = document.getElementById('fechaYHora');  // Obtengo el div por su id

  divFechaYHora.textContent = fechaYHoraFormateada;  // Asigno fecha y hora al contenido del div
}

setInterval(actualizarFechaYHora, 1000); // Para actualizar fecha y hora cada segundo (1000 milisegundos)

actualizarFechaYHora(); // Llamo a la función al cargar la página para mostrar la fecha y hora