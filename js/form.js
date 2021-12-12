(function(){

  // Objeto con las propiedas del formulario //

  const propForm = {

    form: document.contact_form,
    elements: document.contact_form.elements,

  }



  // Objeto con los métodos del formulario //


  const metForm = {

    start: function() {

      for (let i = 0; i < propForm.elements.length; i++) {

        if ( propForm.elements[i].type == 'text' || propForm.elements[i].type == 'email' || propForm.elements[i].nodeName.toLowerCase() == 'textarea' ) {

          propForm.elements[i].addEventListener('focus', metForm.focusInput);
          propForm.elements[i].addEventListener('blur', metForm.blurInput);

        }
      }
    },

    focusInput: function() {

      this.parentElement.children[1].className = 'label active'
    },

    blurInput: function() {

      if (this.value == '') {
        this.parentElement.children[1].className = 'label'
      }

    }

  }

  metForm.start();


}())

