// This is a JavaScript file
// App module
let app = {
  init: function(){
     const langStr =  window.navigator.language;
     let lang = '';

     if(langStr.substr(0, 2) == 'fr'){
            lang = 'fr';
      }
      else{
          lang = 'en';
      }

      const section = new AppSection();
  }
}

document.addEventListener("deviceready", app.init, false);