function mostrarCancionActualizar(codigo) {
    const apiObtenerArtistas = "http://localhost:8094/backRockoloco/canciones/buscar/"+codigo;
  
    const miPromesaArtistas = fetch(apiObtenerArtistas)
      .then((respuesta) => respuesta.json())
      .then((dato) => {
        if (dato.hasOwnProperty("codCancion")) {
          document.getElementById("codC").value = dato.codCancion;
          document.getElementById("nomC").value = dato.nombreCancion;
          document.getElementById("idA").value = dato.codArtista.codArtista;
          document.getElementById("idG").value = dato.codGenero.codGenero;
          document.getElementById("idD").value = dato.codDecada.codDecada;
        } else{
        }
      })
      .catch((miError) => console.log(miError));
  }