function obtenerGenerosAdmin() {
  const apiObtenerRoles = "http://localhost:8094/backRockoloco/generos/todos";
  const miPromesaRoles = fetch(apiObtenerRoles).then((respuesta) => respuesta.json());

  Promise.all([miPromesaRoles]).then((arregloDatos) => {
    const datos = arregloDatos[0];
    crearFilasGenerosAdmin(datos);
  });
}

function crearFilasGenerosAdmin(arregloObjeto) {
  const cantidad = arregloObjeto.length;
  for (let i = 0; i < cantidad; i++) {
    const codGenero = arregloObjeto[i].codGenero;
    const nomGenero = arregloObjeto[i].nombreGenero;

    document.getElementById("generosListado").insertRow(-1).innerHTML =
      "<td>" + codGenero + "</td>"
      + "<td>" + nomGenero + "</td>"
      + "<td class='text-center'>"
      + "<a href='javascript:confirmarGeneroEliminar(" + codGenero + ")'>"
      + "<i class='fa-solid fa-trash-can text-danger'></i></a>&nbsp;"
      + "<a href='#generos-cargar-uno'>"
      + "<i class='fa-solid fa-pen-to-square text-danger'></i></a>&nbsp;"
      + "</td>";
  }
}

function confirmarGeneroEliminar(codigo) {
  if (window.confirm("¿Estás seguro que quieres eliminar este género?")) {
    window.location.replace("#generos-borrar/" + codigo);
  }
}