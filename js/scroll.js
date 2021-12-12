(function(){

// Objeto con las propiedades del SCROLL //


const propScroll = {

  position: window.pageYOffset,
  sweet_scroll: document.getElementsByClassName('sweet-scroll'),
  back_top: document.getElementsByClassName('back-top'),
  destination: null,
  distance_section: null,
  interval: null,

}





// Objeto con los métodos del SCROLL //


const metScroll = {

  start: function() {

    for (let i = 0; i < propScroll.sweet_scroll.length; i++) {
      propScroll.sweet_scroll[i].addEventListener('click', metScroll.move);
    }

    for (let i = 0; i < propScroll.back_top.length; i++) {
      propScroll.back_top[i].addEventListener('click', metScroll.up);
    }

  },

  move: function(e) {

    e.preventDefault();
    clearInterval(propScroll.interval);
    propScroll.destination = this.getAttribute('href');
    propScroll.distance_section = document.querySelector(propScroll.destination).offsetTop - 94;

    propScroll.position = window.pageYOffset;
    propScroll.interval = setInterval(function (){

      if ( propScroll.position < propScroll.distance_section ) {

        propScroll.position += 30;

        if ( propScroll.position >= propScroll.distance_section ) {
          clearInterval(propScroll.interval);
        }

      } else {

        propScroll.position -= 30;

        if ( propScroll.position <= propScroll.distance_section ) {
          clearInterval(propScroll.interval);
        }

      }


      window.scrollTo(0, propScroll.position);

    }, .8);

  },


  up: function(e) {
    e.preventDefault();
    clearInterval(propScroll.interval);
    propScroll.position = window.pageYOffset;
    propScroll.interval = setInterval(function(){

      if ( propScroll.position > 0 ) {

        propScroll.position -= 30;

        if ( propScroll.position <= 0 ) {
          clearInterval(propScroll.interval);
        }

      } else {
        return;
      }

      window.scrollTo(0, propScroll.position);


    }), .8;

  }


}

metScroll.start();


}())