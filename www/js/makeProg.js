// This is a JavaScript file

const makeProg = {
    id: null,
    chordsNum: 5,
    init: function(id){
        makeProg.id = id;
        
        addSectionToDOM(makeProg.id, texts.makeProg[app.lang]);
 
        makeProg.initSection();
    },

    initSection: function(){
        const container = document.getElementById(`card-body-${makeProg.id}`);
        // We add a form tag
        container.innerHTML += 
          `<form class="row">
          </form>`;
        // We select the form
        const form = container.querySelector('form');
        // We add a p to the form, to display the I chord
        // form.innerHTML += `<p class="col inline text-center p-2">I</p>`;
        // We add the selects for chord prog
        for(let i=0; i<makeProg.chordsNum; i++){
          form.innerHTML +=
              `<div class="form-group col">
                  <select class="form-control chord-select" id="chord-select${i}">
                    <option>?</option>
                  </select>
              </div>`;
        }
        container.innerHTML += `<button class="btn btn-primary" id="play-prog-btn">jouer</button>`;

        // We retrieve the selects
        const chordSelects = container.querySelectorAll('.chord-select');

        const I = chords.find((chord) => chord.value === 'I');
        const i = chords.find((chord) => chord.value === 'i');

        [I, i].forEach(function(chord){
            const option = document.createElement('option');
            option.value = chord.value;
            option.innerHTML = chord.name;
            chordSelects[0].add(option);
        });

        chordSelects.forEach(function(select, index){
          if(index > 0){
              select.setAttribute('disabled', 'disabled');
          }
        });

        // We add an event listener to the selects
        chordSelects.forEach(function(select){
          select.addEventListener('change', makeProg.handleSelectChange);
        });
        document.getElementById('play-prog-btn').addEventListener('click', makeProg.playChordProg);
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
            const selChord = chords.find((chord) => chord.value === chordSelects[selIndex].value);
 
            const followingChords = selChord.followedBy;
            chordSelects[selIndex+1].removeAttribute('disabled');
            followingChords.forEach(function(chordValue){
                const nextChord = chords.find((nChord) => nChord.value === chordValue);
                const option = document.createElement('option');
                option.value = nextChord.value;
                option.innerHTML = nextChord.name;
                chordSelects[selIndex+1].add(option);
            });
        }
    },
    playChordProg: function(){
        // We retrieve the selects
        const chordSelects = document.querySelectorAll('.chord-select');
        const chordProg = [];

        chordSelects.forEach(function(select){
            chords.forEach(function(chord){
                if(select.value === chord.value){
                    chordProg.push(chord.value);
                }
            });
        });

        const startTime = 0.1;
        chordProg.forEach(function(chord, index){
            playSound(sounds['C_sound_' + chord], startTime + (2 * index));
        });
    },
};