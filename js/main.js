
const mostrarImagen = (imagen) => {
  let pantalla = document.getElementById("screen")
  if (pantalla.classList.contains("on")) {
    
    let imgElement = document.createElement("img");// Crea un elemento de imagen

    imgElement.src = "img/" + imagen; // Para establecer la fuente de la imagen

    // Para establece atributos como alto y ancho
    imgElement.alt = "Loading";
    imgElement.width = 720;
    imgElement.height = 449;
    imgElement.style.borderRadius = "4px"
    
    document.getElementById("screen").innerHTML = "";   // Limpiar el contenido anterior de screen
    document.getElementById("screen").appendChild(imgElement);   // Agregar la imagen al screen
  }

}

 const onOff = () => {
   let pantalla = document.getElementById("screen");
    if (pantalla.classList.contains("on")) {  // Compruebo si la pantalla esta encendida
      pantalla.classList.remove("on") // Quito ON si estuviera encendida
      pantalla.classList.add("off")     // Añado off para apagarla
      document.getElementById("screen").innerHTML = "";
    } else {
      pantalla.classList.add("on") // Enciendo la pantalla
      pantalla.classList.remove("off")
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