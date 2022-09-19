function crearGenero() {
    const nombre = document.getElementById("nom").value;
    if (nombre !== "") {
        let objetoEnviar = {
            nombreGenero: nombre,
        }

        const apiCrearGeneros = "http://localhost:8094/backRockoloco/generos/create";
        fetch(apiCrearGeneros, {
            method: "POST",
            body: JSON.stringify(objetoEnviar),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(respuesta => respuesta.json())
            .then((datos) => {
                if (datos.hasOwnProperty("codGenero")) {
                    console.log(datos);
                    document.getElementById("genMsgOk").style.display = "";
                    document.getElementById("genMsgError").style.display = "none";
                } else {
                    document.getElementById("genMsgOk").style.display = "none";
                    document.getElementById("genMsgError").style.display = "";
                }
            })
            .catch(
                miError => console.log(miError)
            );

        document.getElementById("saveGen").reset();
        document.getElementById("saveGen").classList.remove("was-validated");

    }
}
