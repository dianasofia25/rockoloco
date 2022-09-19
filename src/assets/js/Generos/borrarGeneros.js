function eliminarGeneros(parametro) {
  const apiObtenerGenero = "http://localhost:8094/backRockoloco/generos/delete/" + parametro;
  const miPromesaGenero = fetch(apiObtenerGenero, { method: 'DELETE' }).then(respuesta => respuesta.json())
    .catch(miError => console.log(miError))

  Promise.all([miPromesaGenero]).then((arregloDatos) => {
    const datos = arregloDatos[0];
    console.log(datos);
    if (datos.status == "200") { //responde correctamente
      document.getElementById('alertGenEliminar').classList.add('alert-primary'); // alerta azul
      document.getElementById('msgGenEliminar').innerHTML = "El género ha sido eliminado";
    } else {
      document.getElementById('alertGenEliminar').classList.add('alert-danger'); // alerta azul
      document.getElementById('msgGenEliminar').innerHTML = "El género NO pudo ser eliminado";
    }
  });
}