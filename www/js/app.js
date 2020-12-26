// This is a JavaScript file
// App module
let app = {
  langStr: window.navigator.language,
  lang: '',
  init: function(){
     if(app.langStr.substr(0, 2) == 'fr'){
          app.lang = 'fr';
      }
      else{
          app.lang = 'en';
      }

      const navbarBrand = document.querySelector('.navbar-brand');
      navbarBrand.textContent = texts.appTitle[app.lang];

      makeProg.init(1);
  }
}

document.addEventListener("deviceready", app.init, false);