// This is a JavaScript file

const makeProg = {
    id: null,
    chordsNum: 5,
    init: function(id){
        makeProg.id = id;
        
        addSectionToDOM(makeProg.id, texts.makeProg[app.lang]);
 
        makeProg.initSelects();
    },

    initSelects: function(){
        const container = document.getElementById(`card-body-${makeProg.id}`);
        // We add a form tag
        container.innerHTML += 
          `<form class="row">
          </form>`;
        // We select the form
        const form = container.querySelector('form');
        // We add a p to the form, to display the I chord
        form.innerHTML += `<p class="col inline text-center p-2">I</p>`;
        // We add the selects for chord prog
        for(let i=0; i<makeProg.chordsNum-1; i++){
          form.innerHTML +=
              `<div class="form-group col">
                  <select class="form-control chord-select" id="chord-select${i}">
                    <option>?</option>
                  </select>
              </div>`;
        }

        // We retrieve the selects
        const chordSelects = container.querySelectorAll('.chord-select');

        chordSelects.forEach(function(select, index){
          if(index > 0){
              select.setAttribute('disabled', 'disabled');
          }
        });

        // We fill the first select
        const selChord = chords.find((chord) => chord.name === I);
        const followingChords = selChord.followedBy;
        followingChords.forEach(function(chord){
            const option = document.createElement('option');
            option.value = chord;
            option.text = chord;
            chordSelects[0].add(option);
        });

        // We add an event listener to the selects
        chordSelects.forEach(function(select){
          select.addEventListener('change', makeProg.handleSelectChange);
        });
           
    },

    handleSelectChange: function(event){
        const container = document.getElementById(`card-body-${makeProg.id}`);
        const chordSelects = container.querySelectorAll('.chord-select');
        let selIndex = null;

        // We retrieve the index of the select that initiated the event
        chordSelects.forEach(function(select, index){
            if(event.currentTarget === select){
                selIndex = index;
            }
        });

        makeProg.setNextChords(chordSelects, selIndex);
    },
    setNextChords: function(chordSelects, selIndex){
        // Don't do anything if the last selct's value changed
        if(selIndex < chordSelects.length-1){
            // We disable following selects and remove all chords from them
            chordSelects.forEach(function(select, index){
                if(index > selIndex){
                    select.setAttribute('disabled', 'disabled');
                    select.options.length = 1;
                }
            });
            // We find the selected chord
            const selChord = chords.find((chord) => chord.name === chordSelects[selIndex].value);
            const followingChords = selChord.followedBy;
            chordSelects[selIndex+1].removeAttribute('disabled');
            followingChords.forEach(function(chord){
                const option = document.createElement('option');
                option.value = chord;
                option.text = chord;
                chordSelects[selIndex+1].add(option);
            });
        }
    },
};