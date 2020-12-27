let sound_I, sound_ii;
var context; 
var bufferLoader;
var startTime = 0.1;

function initSounds([soundUrl1, soundUrl2]) {
    // Fix up prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();
  
    bufferLoader = new BufferLoader(
      context,
      [
        soundUrl1,
        soundUrl2,
      ],
      finishedLoadingSound
      );
  
    bufferLoader.load();
}
  
function finishedLoadingSound(bufferList) {
    sound_I = bufferList[0];
    sound_ii = bufferList[1];
}

function playSound(buffer, time) {
    var source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(context.currentTime + time);
}

// function playPhrase(phraseDurations){
//     var notesTiming = [];
//     notesTiming.push(startTime);
//     for(var i=0; i<phraseDurations.length-1; i++){
//         notesTiming.push(notesTiming[i] + phraseDurations[i]);
//     }
      
//     notesTiming.forEach((item, index) => {
//         playSound(piano, item);
//     })
// }

 

 
  
  

  