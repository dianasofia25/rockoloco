function obtenerCancionesAdmin() {
    const apiObtenerRoles = "http://localhost:8094/backRockoloco/canciones/todas";
    const miPromesaRoles = fetch(apiObtenerRoles).then((respuesta) => respuesta.json());
  
    Promise.all([miPromesaRoles]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      crearFilasCancionesAdmin(datos);
    });
  }
  
  function crearFilasCancionesAdmin(arregloObjeto) {
    const cantidad = arregloObjeto.length;
    for (let i = 0; i < cantidad; i++) {
      const codCancion = arregloObjeto[i].codCancion;
      const nomCancion = arregloObjeto[i].nombreCancion;
      const nomArtista = arregloObjeto[i].codArtista.nombreArtista;
      const nomGenero = arregloObjeto[i].codGenero.nombreGenero;
      const nomDecada = arregloObjeto[i].codDecada.nombreDecada;
  
      document.getElementById("cancionesListado").insertRow(-1).innerHTML =
        "<td>" + codCancion + "</td>"
        + "<td>" + nomCancion + "</td>"
        + "<td>" + nomArtista + "</td>"
        + "<td>" + nomGenero + "</td>"
        + "<td>" + nomDecada + "</td>"
        + "<td class='text-center'>"
        + "<a href='javascript:confirmarCancionEliminar("+codCancion+")'>"
        + "<i class='fa-solid fa-trash-can text-danger'></i></a>&nbsp;"
        + "<a href='#canciones-actuali/"+codCancion+"'>"
        + "<i class='fa-solid fa-pen-to-square text-danger'></i></a>&nbsp;"
        + "</td>";
    }
  }
  
  function confirmarCancionEliminar(codigo) {
    if (window.confirm("¿Estás seguro que quieres eliminar esta cancion?")) {
      window.location.replace("#canciones-borrar/" + codigo);
    }
  }