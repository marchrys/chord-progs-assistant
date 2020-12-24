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

      const section = new AppSection(app.lang);
  }
}

document.addEventListener("deviceready", app.init, false);