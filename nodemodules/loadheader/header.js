function loadHeader() {
    fetch('src/componentes/cabecera.html')
      .then(response => response.text())
      .then(text => document.getElementById('idCabecera').innerHTML = text);
  }
