function eliminarCancion(parametro) {
    const apiObtenerCancion = "http://localhost:8094/backRockoloco/canciones/delete/" + parametro;
    const miPromesaCancion = fetch(apiObtenerCancion,{method:'DELETE'}).then(respuesta => respuesta.json())
      .catch(miError => console.log(miError))
  
    Promise.all([miPromesaCancion]).then((arregloDatos) => {
      const datos = arregloDatos[0];
      console.log(datos);
      if(datos.status == "200"){ //responde correctamente
        document.getElementById('alertCanEliminar').classList.add('alert-primary'); // alerta azul
        document.getElementById('msgCanEliminar').innerHTML = "La canción ha sido eliminada";
      } else{
        document.getElementById('alertCanEliminar').classList.add('alert-danger'); // alerta azul
        document.getElementById('msgCanEliminar').innerHTML = "La canción NO pudo ser eliminada";
      }
    });
  }