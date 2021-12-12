(function(){

  // Objeto para las Propiedades //


  let propTabs = {

    firstTab : document.getElementById('menuTabs').firstElementChild,
    firstContent: document.getElementById('menuContent').firstElementChild,
    tabLinks: document.querySelectorAll('.menu__tabs li a'),
    li_tabs: document.querySelectorAll('.menu__tabs li'),
    divs_content: document.querySelectorAll('#menuContent > div'),
    content_active: null,
  }



  // Objeto para los Métodos //


  let metTabs = {

    inicio: function () {

      propTabs.firstTab.className = 'active';
      propTabs.firstContent.className = 'active';

      for (let i = 0; i < propTabs.tabLinks.length; i++) {
        propTabs.tabLinks[i].addEventListener('click', metTabs.evento);
      }

    },

    evento: function (e) {
      e.preventDefault();

      for (let i = 0; i < propTabs.li_tabs.length; i++) {
        propTabs.li_tabs[i].className = '';
      }

      for (let i = 0; i < propTabs.divs_content.length; i++) {
        propTabs.divs_content[i].className = '';
      }

      this.parentElement.className = 'active';
      propTabs.content_active = this.getAttribute('href');
      document.querySelector(propTabs.content_active).className = 'active';

      document.querySelector(propTabs.content_active).style.opacity = 0;

      setTimeout(function() {
        document.querySelector(propTabs.content_active).style.opacity = 1;

      }, 100);
    }
  }

  metTabs.inicio();

}())


