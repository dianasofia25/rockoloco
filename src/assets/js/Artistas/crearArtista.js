function crearArtistas() {
    const nombre= document.getElementById("nom").value;
    const nacionalidad=document.getElementById("nac").value;
    if(nombre!=="" & nacionalidad!==""){
       let objetoEnviar={
        nombreArtista:nombre,
        nacionalidadArtista:nacionalidad
       } 

       const apiCrearArtistas = "http://localhost:8094/backRockoloco/artistas/create";
       fetch(apiCrearArtistas,{
        method:"POST",
        body:JSON.stringify(objetoEnviar),
        headers:{"Content-type": "application/json; charset=UTF-8"}
       })
       .then(respuesta=>respuesta.json())
       .then((datos)=> {
        if (datos.hasOwnProperty("codArtista")) {
            console.log(datos);
            document.getElementById("artMsgOk").style.display = "";
            document.getElementById("artMsgError").style.display = "none";
        } else {
            document.getElementById("artMsgOk").style.display = "none";
            document.getElementById("artMsgError").style.display = "";
        }
    })
       .catch(
            miError=>console.log(miError)
        );
       
    document.getElementById("saveArt").reset();
    document.getElementById("saveArt").classList.remove("was-validated");

    } 
}


