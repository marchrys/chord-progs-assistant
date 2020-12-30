let sounds = [
  'C_sound_I', 
  'C_sound_i',
  'C_sound_ii', 
  'C_sound_ii_dim', 
  'C_sound_iii', 
  'C_sound_IV', 
  'C_sound_iv',
  'C_sound_V', 
  'C_sound_vi',
  'C_sound_VI'
];
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
    sounds['C_sound_I'] = bufferList[0];
    sounds['C_sound_i'] = bufferList[1];
    sounds['C_sound_ii'] = bufferList[2];
    sounds['C_sound_ii_dim'] = bufferList[3];
    sounds['C_sound_iii'] = bufferList[4];
    sounds['C_sound_IV'] = bufferList[5];
    sounds['C_sound_iv'] = bufferList[6];
    sounds['C_sound_V'] = bufferList[7];
    sounds['C_sound_vi'] = bufferList[8];
    sounds['C_sound_VI'] = bufferList[9];
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

 

 
  
  

  