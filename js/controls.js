
export default function Controls (
  {
  btnPlay,
  btnPause,
  btnSet,
  btnStop
}
){

function play(){
  btnPlay.classList.add('hide');
  btnPause.classList.remove('hide');
  btnSet.classList.add('hide');
  btnStop.classList.remove('hide');
}


function pause(){
  btnPlay.classList.remove('hide');
  btnPause.classList.add('hide');
}

function reset() {
  btnPlay.classList.remove('hide');
  btnPause.classList.add('hide');
  btnSet.classList.remove('hide');
  btnStop.classList.add('hide');
}

function getMinutes(){
  let newMinutes = prompt("Qual tempo deseja para foco?");
    if(!newMinutes){
      return false
    }
    return newMinutes
    // timer.updateTimerDisplay(minutes, 0);
}

  return {
    play,
    pause,
    reset,
    getMinutes
  }
}

