// This is a JavaScript file

class MakeProg{
  constructor(lang){
    this.lang = lang;
    this.id = 1;
    console.log(this.lang);

    addSectionToDOM(this.id);

    console.log(document.getElementById(`card-body-${this.id}`).innerHTML);
  }

}