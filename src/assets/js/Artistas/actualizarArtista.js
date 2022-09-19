function artistaActualizar(){
  const codigo = document.getElementById("codA").value;
  const artista = document.getElementById("nomA").value;
  const nacionalidad = document.getElementById("nacionA").value;

  let objetoEnviar = {
    codArtista: codigo,
    nombreArtista: artista,
    nacionalidadArtista: nacionalidad
  };

  const apiCrearRol = "http://localhost:8094/backRockoloco/artistas/update";
  fetch(apiCrearRol, {
    method: "PUT",
    body: JSON.stringify(objetoEnviar),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      if (datos.status == "200") {
        console.log(datos);
        document.getElementById("artistMsgOk").style.display = "";
        document.getElementById("artistMsgError").style.display = "none";
      } else {
        console.log("No se puede grabar -> " + datos.status);
        document.getElementById("artistMsgOk").style.display = "none";
        document.getElementById("artistMsgError").style.display = "";
      }
      document.getElementById("updateArtist").reset();
      document.getElementById("updateArtist").classList.remove("was-validated");
    })
    .catch((miError) => console.log(miError));
}