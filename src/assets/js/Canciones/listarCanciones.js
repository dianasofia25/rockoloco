function obtenerCanciones() {
  const apiObtenerCanciones = "http://localhost:8094/backRockoloco/canciones/todas";
  const miPromesaCanciones = fetch(apiObtenerCanciones).then((respuesta) =>
    respuesta.json()
  );

  Promise.all([miPromesaCanciones]).then((arregloDatos) => {
    const datosC = arregloDatos[0];
    console.log(datosC);
    crearFilasCanciones(datosC);
  });

}

function crearFilasCanciones(arregloObjeto) {
  const cantidadC = arregloObjeto.length;

  for (let i = 0; i < cantidadC; i++) {
    const nomCanciones = arregloObjeto[i].nombreCancion;
    const nomArtista = arregloObjeto[i].codArtista.nombreArtista;
    const nomDecada = arregloObjeto[i].codDecada.nombreDecada;

    switch (nomDecada) {
      case "2020":
        document.getElementById("tableCanciones20").insertRow(-1).innerHTML =
          "<tr> <th scope='row' style='padding-left: 2px;'>" + "- " + "</th>"
          + "<td><div class='fw-bold'>" + nomCanciones + "</div>"
          + "<h6 class='nombres-cantantes'>" + nomArtista + "</h6>"
          + "</td></tr>";
        break;
      case "2010":
        document.getElementById("tableCanciones10").insertRow(-1).innerHTML =
          "<tr> <th scope='row' style='padding-left: 2px;'>" + "- " + "</th>"
          + "<td><div class='fw-bold'>" + nomCanciones + "</div>"
          + "<h6 class='nombres-cantantes'>" + nomArtista + "</h6>"
          + "</td></tr>";
        break;
      case "2000":
        document.getElementById("tableCanciones00").insertRow(-1).innerHTML =
          "<tr> <th scope='row' style='padding-left: 2px;'>" + "- " + "</th>"
          + "<td><div class='fw-bold'>" + nomCanciones + "</div>"
          + "<h6 class='nombres-cantantes'>" + nomArtista + "</h6>"
          + "</td></tr>";
        break;
      case "1990":
        document.getElementById("tableCanciones90").insertRow(-1).innerHTML =
          "<tr> <th scope='row' style='padding-left: 2px;'>" + "- " + "</th>"
          + "<td><div class='fw-bold'>" + nomCanciones + "</div>"
          + "<h6 class='nombres-cantantes'>" + nomArtista + "</h6>"
          + "</td></tr>";
        break;
      case "1980":
        document.getElementById("tableCanciones80").insertRow(-1).innerHTML =
          "<tr> <th scope='row' style='padding-left: 2px;'>" + "- " + "</th>"
          + "<td><div class='fw-bold'>" + nomCanciones + "</div>"
          + "<h6 class='nombres-cantantes'>" + nomArtista + "</h6>"
          + "</td></tr>";
        break;
      case "1970":
        document.getElementById("tableCanciones70").insertRow(-1).innerHTML =
          "<tr> <th scope='row' style='padding-left: 2px;'>" + "- " + "</th>"
          + "<td><div class='fw-bold'>" + nomCanciones + "</div>"
          + "<h6 class='nombres-cantantes'>" + nomArtista + "</h6>"
          + "</td></tr>";
        break;
      case "1960":
        document.getElementById("tableCanciones60").insertRow(-1).innerHTML =
          "<tr> <th scope='row' style='padding-left: 2px;'>" + "- " + "</th>"
          + "<td><div class='fw-bold'>" + nomCanciones + "</div>"
          + "<h6 class='nombres-cantantes'>" + nomArtista + "</h6>"
          + "</td></tr>";
        break;
      case "1950":
        document.getElementById("tableCanciones50").insertRow(-1).innerHTML =
          "<tr> <th scope='row' style='padding-left: 2px;'>" + "- " + "</th>"
          + "<td><div class='fw-bold'>" + nomCanciones + "</div>"
          + "<h6 class='nombres-cantantes'>" + nomArtista + "</h6>"
          + "</td></tr>";
        break;
    }
  }
}
