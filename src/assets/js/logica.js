function logicaNegocio(url, param) {
  switch (url) {
    //Generos*******************************************
    case "src/componentes/generos/generos.html":
      break;
    case "src/componentes/generos/generosEliminar.html":
      eliminarGeneros(param);
      break;
    case "src/componentes/generos/generosAdmin.html":
      obtenerGenerosAdmin();
      break;

    //Canciones*******************************************
    case "src/componentes/canciones/canciones.html":
      obtenerCanciones();
      break;
    case "src/componentes/canciones/cancionesCrear.html":
      obtenerTodoCanciones();
      break;
    case "src/componentes/canciones/cancionesEliminar.html":
      eliminarCancion(param);
      break;
    case "src/componentes/canciones/cancionesAdmin.html":
      obtenerCancionesAdmin();
      break;
    case "src/componentes/canciones/cancionesActualizar.html":
      mostrarCancionActualizar(param);
      obtenerTodoCanciones();
      break;

    //Artistas*******************************************
    case "src/componentes/artistas/artistas.html":
      obtenerArtistas();
      break;
    case "src/componentes/artistas/artistasEliminar.html":
      eliminarArtistas(param);
      break;
    case "src/componentes/artistas/artistasAdmin.html":
      obtenerArtistAdmin();
      break;
    case "src/componentes/artistas/artistasActualizar.html":
      mostrarArtistaActualizar(param);
      break;

    //***************************************************
    default:
      console.log("Javascript interno no utilizado");
  }
}
