// This is a JavaScript file

function addSectionToDOM(id, headerButtonText){
    const appAccordion = document.getElementById('appAccordion');
    
    appAccordion.innerHTML += 
        `<div class="card">
            <div class="card-header" id="heading${id}">
                <h2 class="mb-0">
                    <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${id}" aria-expanded="true" aria-controls="collapse${id}">
                       ${headerButtonText}
                    </button>
                </h2>
            </div>

            <div id="collapse${id}" class="collapse show" aria-labelledby="heading${id}" data-parent="#appAccordion">
                <div class="card-body" id="card-body-${id}">
                </div>
            </div>
        </div>`;
}