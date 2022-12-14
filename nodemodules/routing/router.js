'use strict';

function Router(routes) {
  try {
    if (!routes) {
      throw 'Error: Parametro obligatorio';
    }
    this.constructor(routes);
    this.init();
  } catch (e) {
    console.error(e);
  }
}

Router.prototype = {
  routes: undefined,
  rootElem: undefined,
  constructor: function (routes) {
    this.routes = routes;
    this.rootElem = document.getElementById('idRuteo');
  },
  init: function () {
    var r = this.routes;
    (function (scope, r) {
      window.addEventListener('hashchange', function (e) {
        scope.hasChanged(scope, r);
      });
    })(this, r);
    this.hasChanged(this, r);
  },
  hasChanged: function (scope, r) {
    let ruta = "";
    let parametro = "";
    const rutaCompleta = window.location.hash.slice(1);
    if (rutaCompleta.indexOf('/') > -1) {
      parametro = rutaCompleta.substring(rutaCompleta.indexOf('/') + 1);
      ruta = rutaCompleta.replace("/" + parametro, "");
    } else {
      ruta = rutaCompleta;
    }

    // console.log(ruta + " <--> " + parametro);

    if (window.location.hash.length > 0) {
      for (var i = 0, length = r.length; i < length; i++) {
        var route = r[i];
        //if (route.isActiveRoute(window.location.hash.substr(1))) {
        if (route.isActiveRoute(ruta)) {
          scope.goToRoute(route.htmlName, parametro);
        }
      }
    } else {
      for (var i = 0, length = r.length; i < length; i++) {
        var route = r[i];
        if (route.default) {
          scope.goToRoute(route.htmlName, parametro);
        }
      }
    }
  },
  goToRoute: function (htmlName, param) {
    (function (scope) {
      var url = 'src/componentes/' + htmlName,
        xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          scope.rootElem.innerHTML = this.responseText;

          (function () {
            'use strict'
            const forms = document.querySelectorAll('.validarFormulario')
            Array.from(forms)
              .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                  if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                  }

                  form.classList.add('was-validated')
                }, false)
              })
          })();

          logicaNegocio(url, param);
        }
      };

      xhttp.open('GET', url, true);
      xhttp.send();
    })(this);
  }
};