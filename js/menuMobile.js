// OBJETO con las PROPIEDADES del MENÚ //


const propMenu = {

  navToggle: document.getElementById('burgerMenu'),
  navMenu: document.getElementById('menuMobile'),
  navItems: document.querySelectorAll('#menuMobile .nav .nav__list a'),

}

// OBJETO con los MÉTODOS del MENÚ //

const metMenu = {

  start: function() {

    propMenu.navToggle.addEventListener('click', metMenu.toggleMenu);

    for ( let i = 0; i < propMenu.navItems.length; i++) {
      propMenu.navItems[i].addEventListener('click', metMenu.closeMenu);
    }
  },

  toggleMenu: function() {
    propMenu.navMenu.classList.toggle('active');
  },

  closeMenu: function() {
    propMenu.navMenu.classList.toggle('active');
  }

}

metMenu.start();
