
function mostrarImagen(imagen) {
    // Crear un elemento de imagen
    let imgElement = document.createElement("img");

    // Establecer la fuente (URL) de la imagen
    imgElement.src = "img/" + imagen;

    // Establecer atributos opcionales como texto alternativo, ancho, alto, etc.
    imgElement.alt = "Dog";
    imgElement.width = 720;
    imgElement.height = 480;

    // Limpiar el contenido anterior del contenedor
    document.getElementById("screen").innerHTML = "";

    // Agregar el elemento de imagen al contenedor div
    document.getElementById("screen").appendChild(imgElement);
  }

