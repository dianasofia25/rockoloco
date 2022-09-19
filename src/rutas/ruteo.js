'use strict';

(function () {
  function init() {
    var router = new Router([
      new Route('home', 'inicio.html', true),
      
      new Route('artistas', 'artistas/artistas.html'),
      new Route('artistas-crear','artistas/artistasCrear.html'),
      new Route('artistas-borrar','artistas/artistasEliminar.html'),
      new Route('artistas-admin','artistas/artistasAdmin.html'),
      new Route('artistas-actuali','artistas/artistasActualizar.html'),
      
      new Route('generos', 'generos/generos.html'),
      new Route('generos-crear','generos/generosCrear.html'),
      new Route('generos-borrar','generos/generosEliminar.html'),
      new Route('generos-admin','generos/generosAdmin.html'),

      new Route('canciones', 'canciones/canciones.html'),
      new Route('canciones-crear','canciones/cancionesCrear.html'),
      new Route('canciones-borrar', 'canciones/cancionesEliminar.html'),
      new Route('canciones-admin','canciones/cancionesAdmin.html'),
      new Route('canciones-actuali','canciones/cancionesActualizar.html')
      
    ]);
  }
  init();
}());
