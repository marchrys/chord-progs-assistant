let C_sound_I, C_sound_ii, C_sound_iii, C_sound_IV, C_sound_V, C_sound_vi;
var context; 
var bufferLoader;
var startTime = 0.1;

function initSounds(soundUrls) {
    // Fix up prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();
  
    bufferLoader = new BufferLoader(
      context,
      soundUrls,
      finishedLoadingSound
      );
  
    bufferLoader.load();
}
  
function finishedLoadingSound(bufferList) {
    C_sound_I = bufferList[0];
    C_sound_ii = bufferList[1];
    C_sound_iii = bufferList[2];
    C_sound_IV = bufferList[3];
    C_sound_V = bufferList[4];
    C_sound_vi = bufferList[5];
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

 

 
  
  

  