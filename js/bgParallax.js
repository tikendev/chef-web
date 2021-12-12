(function(){

  // Objeto para las propiedades del Parallax //

  let propParallax = {

    section: document.querySelector('.parallax'),
    route: null,
    limit: null,


  }




  // Objeto para los métodos del Parallax //


  let metParallax = {

    start: function() {
      window.addEventListener('scroll', metParallax.scrollParallax);
    },

    scrollParallax: function() {

      propParallax.route = window.pageYOffset;
      propParallax.limit = propParallax.section.offsetTop + propParallax.section.offsetHeight;


      if (propParallax.route > propParallax.section.offsetTop - window.outerHeight && propParallax.route <= propParallax.limit) {

        propParallax.section.style.backgroundPositionY = (propParallax.route - propParallax.section.offsetTop) / 1.5 + 'px';

      } else {
        propParallax.section.style.backgroundPositionY = 0;
      }

    }


  }

  metParallax.start();


}())


