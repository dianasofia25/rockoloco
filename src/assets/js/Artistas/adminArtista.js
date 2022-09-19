function obtenerArtistAdmin() {
    const apiObtenerRoles = "http://localhost:8094/backRockoloco/artistas/todos";
    const miPromesaRoles = fetch(apiObtenerRoles).then((respuesta) =>
        respuesta.json()
    );

    Promise.all([miPromesaRoles]).then((arregloDatos) => {
        const datos = arregloDatos[0];
        crearTablaArtistasAdmin(datos);
    });
}

function crearTablaArtistasAdmin(arregloObjeto) {
    const cantidad = arregloObjeto.length;
    for (let i = 0; i < cantidad; i++) {
        const codArtista = arregloObjeto[i].codArtista;
        const nombreArtista = arregloObjeto[i].nombreArtista;
        const nacionArtista = arregloObjeto[i].nacionalidadArtista;

        document.getElementById("artistasListado").insertRow(-1).innerHTML =
            "<td>" + codArtista + "</td>"
            + "<td>" + nombreArtista + "</td>"
            + "<td>" + nacionArtista + "</td>"
            + "<td class='text-center'>"
            + "<a href='javascript:confirmarArtistEliminar("+codArtista+")'>"
            + "<i class='fa-solid fa-trash-can text-danger'></i></a>&nbsp;"
            + "<a href='#artistas-actuali/"+codArtista+"'>"
            + "<i class='fa-solid fa-pen-to-square text-danger'></i></a>&nbsp;"
            + "</td>";
    }
}

function confirmarArtistEliminar(codigo) {
    if (window.confirm("¿Estás seguro que quieres eliminar este artista?")) {
      window.location.replace("#artistas-borrar/" + codigo); //ruta en ruteo.js
    }
  }