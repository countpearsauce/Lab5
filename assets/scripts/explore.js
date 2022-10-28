// explore.js

window.addEventListener('DOMContentLoaded', init);
var speech;
var img = document.querySelector('img');

function init() {

  var voiceSelector = document.getElementById('voice-select');
  speech = window.speechSynthesis;
  var voices = speech.getVoices();
  var voice;
  var utterance;
  var text = "";

  speech.addEventListener('voiceschanged', function() {
    voices = speech.getVoices();

    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = voices[i].name;
      option.setAttribute('data-name', voices[i].name);
      voiceSelector.append(option);
    }

  });

  voiceSelector.addEventListener('change', (event) => {
    
    for(let i = 0; i < voices.length; i++) {
      if(event.target.value == voices[i].name) {
        voice = voices[i];
      }
    } 
  });

  const buttons = document.getElementsByTagName('button');
  const textArea = document.getElementsByTagName('textarea')[0];

  textArea.addEventListener('input', function() {
    text = event.target.value;
  });

  buttons[0].addEventListener('click', function() {
    utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    img.src="assets/images/smiling-open.png";
    speech.speak(utterance);
    setTimeout(function() { checkSpeaking();; }, 50);
    
  });

}

function checkSpeaking() {
  if(speech.speaking)
    setTimeout(function() { checkSpeaking();; }, 50);
  else
    img.src="assets/images/smiling.png";

}