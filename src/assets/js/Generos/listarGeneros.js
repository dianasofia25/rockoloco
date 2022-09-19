function obtenerGeneros() {
  const apiObtenerRoles = "http://localhost:8094/backRockoloco/generos/todos";
  const miPromesaRoles = fetch(apiObtenerRoles).then((respuesta) =>
    respuesta.json()
  );

  Promise.all([miPromesaRoles]).then((arregloDatos) => {
    const datos = arregloDatos[0];
    console.log(datos);
    crearFilasGeneros(datos);
  });
}

function crearFilasGeneros(arregloObjeto) {
  const cantidad = arregloObjeto.length;
  for (let i = 0; i < cantidad; i++) {
    const codGenero = arregloObjeto[i].codGenero;
    const nomGenero = arregloObjeto[i].nombreGenero;

    document.getElementById("generosListado").insertRow(-1).innerHTML =
        "<td>" + codGenero + "</td>"
      + "<td>" + nomGenero + "</td>";
  }
}
