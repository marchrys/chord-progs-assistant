// This is a JavaScript file

class MakeProg{
  constructor(lang){
    this.lang = lang;
    this.id = 1;
    this.chordsNum = 5;

    addSectionToDOM(this.id, texts.makeProg[this.lang]);

    // Card body becomes the container for this section
    this.container = document.getElementById(`card-body-${this.id}`);
    // We add a form tag
    this.container.innerHTML += 
      `<form class="row">
      </form>`;
    // We select the form
    const form = this.container.querySelector('form');
    // We add a p to the form, to display the I chord
    form.innerHTML += `<p class="col inline text-center p-2">I</p>`;
    // We add the selects for chord prog
    for(let i=0; i<this.chordsNum-1; i++){
      form.innerHTML +=
          `<div class="form-group col">
              <select class="form-control chord-select" id="chord-select${i}">
                <option>?</option>
              </select>
          </div>`;
    }
    // We retrieve the selects
    const chordSelects = this.container.querySelectorAll('.chord-select');
    chordSelects.forEach(function(select, index){
        if(index > 0){
            select.setAttribute('disabled', 'disabled');
        }
    });
  }

}