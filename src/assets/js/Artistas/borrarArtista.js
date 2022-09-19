function eliminarArtistas(parametro) {
    const apiObtenerArtista = "http://localhost:8094/backRockoloco/artistas/delete/" + parametro;
    const miPromesaArtista = fetch(apiObtenerArtista,{method:'DELETE'}).then(respuesta => respuesta.json())
      .catch(miError => console.log(miError))
  
    Promise.all([miPromesaArtista]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      console.log(datos);
      if(datos.status == "200"){ //responde correctamente
        document.getElementById('alertArtistEliminar').classList.add('alert-primary'); // alerta azul
        document.getElementById('msgArtistEliminar').innerHTML = "El artista ha sido eliminado";
      } else{
        document.getElementById('alertArtistEliminar').classList.add('alert-danger'); // alerta azul
        document.getElementById('msgArtistEliminar').innerHTML = "El artista NO pudo ser eliminado";
      }
    });
  }