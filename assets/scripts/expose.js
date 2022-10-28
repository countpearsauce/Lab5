// expose.js


window.addEventListener('DOMContentLoaded', init);

function init() {
 
  const audio = document.querySelector("audio");
  var horn = "none";
  const buttons = document.getElementsByTagName('button');
  const volumeControl = document.querySelector("input");

  const hornImg = document.getElementsByTagName('img')[0];
  const audioImg = document.getElementsByTagName('img')[1];

  volumeControl.addEventListener('change', function() {
    audio.volume = volumeControl.value/100.0;
    console.log(volumeControl.value);
    if(volumeControl.value == 0)
      audioImg.src="assets/icons/volume-level-0.svg";
    if(volumeControl.value > 1)
      audioImg.src="assets/icons/volume-level-1.svg";
    if(volumeControl.value >= 33)
      audioImg.src="assets/icons/volume-level-2.svg";
    if(volumeControl.value >= 67)
      audioImg.src="assets/icons/volume-level-3.svg";
  });
  
  buttons[0].addEventListener('click', function() {
    if(horn=="party") {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
    if(horn!="none")
      audio.play();
  });
  


  const horns = document.getElementsByTagName('select')[0];

  horns.addEventListener('change', (event) => {
    if(event.target.value == 'air-horn') {
      hornImg.src="assets/images/air-horn.svg";
      audio.src="assets/audio/air-horn.mp3";
      horn = "air";
    } else if(event.target.value == 'car-horn') {
      hornImg.src="assets/images/car-horn.svg";
      audio.src="assets/audio/car-horn.mp3";
      horn = "car";
    } else {
      hornImg.src="assets/images/party-horn.svg";
      audio.src="assets/audio/party-horn.mp3";
      horn = "party";
    }
  });
}