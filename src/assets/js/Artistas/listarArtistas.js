function obtenerArtistas() {
  const apiObtenerArtistas = "http://localhost:8094/backRockoloco/artistas/todos";
  const miPromesaArtistas = fetch(apiObtenerArtistas).then((respuesta) =>
    respuesta.json()
  );

  Promise.all([miPromesaArtistas]).then((arregloDatos) => {
    const datosA = arregloDatos[0];
    console.log(datosA);
    crearFilasArtistas(datosA);
  });

}

function crearFilasArtistas(arregloObjeto) {
  const cantidadA = arregloObjeto.length;

  for (let i = 0; i < cantidadA; i++) {
    const nomArtistaC = arregloObjeto[i].nombreArtista;
    const codiArtista = arregloObjeto[i].codArtista;
    const nacionalidadArtista = arregloObjeto[i].nacionalidadArtista;

    document.getElementById('tableArtistas').insertRow(-1).innerHTML =
      "<td><div class='accordion-item'>" +
        "<button class='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapse"+i+"' aria-expanded='false' aria-controls='flush-collapse"+i+"'>" +
          "<img src='src/assets/images/artistasLogo.png' alt='Pop image' style='width:55px; padding-right: 15px;'>&nbsp" + nomArtistaC + 
        "</button>" +
        "<div id='flush-collapse"+i+"' style='background-color:rgb(37, 36, 36)' class='accordion-collapse collapse' aria-labelledby='flush-heading"+i+"' data-bs-parent='#tableArtistas'>" +
          "<div class='accordion-body'>" + 
          "<table class='table table-borderless table-sm table-responsive-lg' id='tableCanciones'>" +
            "<thead style='color: grey; font-size: smaller;'>" +
            "<tr><th scope='col' style='width: 20%;'>CODIGO</th>" +
              "<th scope='col style='width: 50%;'>NOMBRE</th>" +
              "<th scope='col style='width: 20%;'>NACIONALIDAD</th>" +
              "<th style='width: 10%;'>&nbsp;</th></tr><thead><tbody>" +
            "<tr> <th scope='row'>" + codiArtista +"</th>" +
            "<td>"+ nomArtistaC +"</td>" +
            "<td>"+ nacionalidadArtista +"</td>"
            "</tr>" +
            "</tbody></table>"
          "</div>" +
        "</div>" +
      "</div>" +
      "</td>";
  }
}
