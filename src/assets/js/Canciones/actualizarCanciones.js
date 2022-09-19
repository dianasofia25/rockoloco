function cancionActualizar() {
  const codCancion = document.getElementById("codC").value;
  const nombreC = document.getElementById("nomC").value;
  const codArtista = document.getElementById("idA").value;
  const codGenero = document.getElementById("idG").value;
  const codDecada = document.getElementById("idD").value;

  let objetoEnviar = {
    codCancion: codCancion,
    nombreCancion: nombreC,
    codArtista: codArtista,
    codGenero: codGenero,
    codDecada: codDecada
  };

  const apiCrearRol = "http://localhost:8094/backRockoloco/canciones/update";
  fetch(apiCrearRol, {
    method: "PUT",
    body: JSON.stringify(objetoEnviar),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  })
    .then((respuesta) => respuesta.json())
    .then((datos) => {
      if (datos.status == "200") {
        console.log(datos);
        document.getElementById("cancionMsgOk").style.display = "";
        document.getElementById("cancionMsgError").style.display = "none";
      } else {
        console.log("No se puede grabar -> " + datos.status);
        document.getElementById("cancionMsgOk").style.display = "none";
        document.getElementById("cancionMsgError").style.display = "";
      }
      document.getElementById("updateCan").reset();
      document.getElementById("updateCan").classList.remove("was-validated");
    })
    .catch((miError) => console.log(miError));
}