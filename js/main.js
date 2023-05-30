import Controls from './controls.js'
import Timer  from './timer.js'
import {elements} from './elements.js'
import Sound from './sounds.js';

 const {
  btnPause,
  btnPlay,
  btnSet,
  btnSoundOff,
  btnSoundOn,
  btnStop,
  minutesDisplay,
  secondsDisplay,

 } = elements


const controls = Controls({
  btnPlay,
  btnPause,
  btnSet,
  btnStop
})
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
} )

const sound = Sound();



btnPlay.addEventListener('click', () => {
  controls.play();
  timer.countdown();
  sound.pressButton();
})



btnPause.addEventListener('click', () => {
  controls.pause();
  timer.hold();
  sound.pressButton();

  });

  btnStop.addEventListener('click', () => {
    controls.reset();
    timer.reset();
  sound.pressButton();

  });

  btnSoundOn.addEventListener('click', () => {
    btnSoundOn.classList.toggle('hide');
    btnSoundOff.classList.toggle('hide');
    sound.bgAudio.play();
  });

  btnSoundOff.addEventListener('click', () => {
    btnSoundOn.classList.toggle('hide');
    btnSoundOff.classList.toggle('hide');
    sound.bgAudio.pause();

  });

  btnSet.addEventListener('click', () => {
    let newMinutes = controls.getMinutes()

    if(!newMinutes){
      timer.reset()
      return
    }
    timer.updateDisplay(newMinutes,0)
    timer.updateMinutes(newMinutes)
  });