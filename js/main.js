
const mostrarImagen = (imagen) => {
    let encender = document.getElementById("redButton")
    if(encender.classList.contains("on")) {
            // Crea un elemento de imagen
    let imgElement = document.createElement("img");

    // Para establecer la fuente de la imagen
    imgElement.src = "img/" + imagen;

    // Para establece atributos como alto y ancho
    imgElement.alt = "Loading";
    imgElement.width = 720;
    imgElement.height = 480;
    imgElement.style.borderRadius = "4px"
    // Limpiar el contenido anterior del screen
    document.getElementById("screen").innerHTML = "";

    // Agregar la imagen al screen
    document.getElementById("screen").appendChild(imgElement);
    }

  }

  const onOff = () => {
    let encender = document.getElementById ("redButton");
    if(encender.classList.contains("on")) {
        encender.classList.remove("on")
        encender.classList.add("off")
        document.getElementById("screen").innerHTML = "";
    } else {
        encender.classList.add("on")
        encender.classList.remove("off")
    }
  }