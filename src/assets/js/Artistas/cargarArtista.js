function mostrarArtistaActualizar(codigo) {
  const apiObtenerArtistas = "http://localhost:8094/backRockoloco/artistas/buscar/"+codigo;

  const miPromesaArtistas = fetch(apiObtenerArtistas)
    .then((respuesta) => respuesta.json())
    .then((dato) => {
      if (dato.hasOwnProperty("codArtista")) {
        document.getElementById("codA").value = dato.codArtista;
        document.getElementById("nomA").value = dato.nombreArtista;
        document.getElementById("nacionA").value = dato.nacionalidadArtista;
      } else{
      }
    })
    .catch((miError) => console.log(miError));
}