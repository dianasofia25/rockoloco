function crearCancion() {
  const cancion = document.getElementById("nomC").value;
  const artista = document.getElementById("idA").value;
  const genero = document.getElementById("idG").value;
  const decada = document.getElementById("idD").value;
  if (cancion !== "" & artista !== "" & genero !== "" & decada !== "") {
    let objetoEnviar = {
      nombreCancion: cancion,
      codArtista: artista,
      codGenero: genero,
      codDecada: decada
    }

    const apiCrearCanciones = "http://localhost:8094/backRockoloco/canciones/create";
    fetch(apiCrearCanciones, {
      method: "POST",
      body: JSON.stringify(objetoEnviar),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
      .then(respuesta => respuesta.json())
      .then((datos) => {
        if (datos.hasOwnProperty("codCancion")) {
          console.log(datos);
          document.getElementById("canMsgOk").style.display = "";
          document.getElementById("canMsgError").style.display = "none";
        } else {
          document.getElementById("canMsgOk").style.display = "none";
          document.getElementById("canMsgError").style.display = "";
        }
      })
      .catch(
        miError => console.log(miError)
      );

    document.getElementById("saveCan").reset();
    document.getElementById("saveCan").classList.remove("was-validated");

  }
}

function obtenerTodoCanciones() {
  const apiObtenerArtistas = "http://localhost:8094/backRockoloco/artistas/todos";
  const apiObtenerGeneros = "http://localhost:8094/backRockoloco/generos/todos";
  const apiObtenerDecadas = "http://localhost:8094/backRockoloco/decadas/todas";
  const miPromesaArtistas = fetch(apiObtenerArtistas).then((respuesta) =>
    respuesta.json()
  );
  const miPromesaGeneros = fetch(apiObtenerGeneros).then((respuesta) =>
    respuesta.json()
  );
  const miPromesaDecadas = fetch(apiObtenerDecadas).then((respuesta) =>
    respuesta.json()
  );

  Promise.all([miPromesaArtistas, miPromesaGeneros, miPromesaDecadas]).then((arregloDatos) => {
    const artistas = arregloDatos[0];
    const generos = arregloDatos[1];
    const decadas = arregloDatos[2];
    crearTablas(artistas, generos, decadas);
  });
}

function crearTablas(arregloArtistas, arregloGeneros, arregloDecadas) {

  const cantidadA = arregloArtistas.length;
  for (let i = 0; i < cantidadA; i++) {
    const codArtista = arregloArtistas[i].codArtista;
    const nombreArtista = arregloArtistas[i].nombreArtista;

    document.getElementById("codigosArtistas").insertRow(-1).innerHTML =
      "<td>" + codArtista + "</td>"
      + "<td>" + nombreArtista + "</td>";
  }

  const cantidadG = arregloGeneros.length;
  for (let i = 0; i < cantidadG; i++) {
    const codGenero = arregloGeneros[i].codGenero;
    const nombreGenero = arregloGeneros[i].nombreGenero;

    document.getElementById("codigosGeneros").insertRow(-1).innerHTML =
      "<td>" + codGenero + "</td>"
      + "<td>" + nombreGenero + "</td>";
  }

  const cantidadD = arregloDecadas.length;
  for (let i = 0; i < cantidadD; i++) {
    const codDecada = arregloDecadas[i].codDecada;
    const nombreDecada = arregloDecadas[i].nombreDecada;

    document.getElementById("codigosDecadas").insertRow(-1).innerHTML =
      "<td>" + codDecada + "</td>"
      + "<td>" + nombreDecada + "</td>";
  }
}