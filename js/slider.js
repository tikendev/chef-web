(function(){

  // Objeto con las Propiedades del Slider //

  let propSlider = {

    slider: document.getElementById('slider'),
    primerSlide: null,
  }



  // Objeto con los Métodos del Slider //

  let metSlider = {

    inicio: function () {
      setInterval(metSlider.moverSlide, 3000);

    },

    moverSlide: function () {
      propSlider.slider.style.transition = 'all 1s ease';
      propSlider.slider.style.marginInlineStart = '-100%';

      setTimeout(function () {
        propSlider.primerSlide = propSlider.slider.firstElementChild;

        propSlider.slider.appendChild(propSlider.primerSlide);

        propSlider.slider.style.transition = 'unset';

        propSlider.slider.style.marginInlineStart = '0';

      }, 1000);


    }

  }

  metSlider.inicio();


}())

