// This is a JavaScript file

class AppSection{
  constructor(lang){
    this.lang = lang;
    alert(this.lang);

    this.addSectionToDOM();
  }

  addSectionToDOM(){
    const appAccordion = document.getElementById('appAccordion');
    
    appAccordion.innerHTML += 
        `<div class="card">
            <div class="card-header" id="headingOne">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Créer une suite d'accords
                    </button>
                </h2>
            </div>

            <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#appAccordion">
                <div class="card-body">
                    
                </div>
            </div>
        </div>`;
  }
}