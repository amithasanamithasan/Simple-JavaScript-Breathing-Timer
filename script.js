let timeLeft;
let TimerInterval;
let isRunnig = false;
const TimerDisplay = document.getElementById('timer');
const StartDisplay = document.getElementById('start-btn');
const StopDisplay = document.getElementById('stop-btn');

const startTimer = (time) => {
    // console.log('start Timer Runnings')
  let timer = time;

  // Use the global TimerInterval to reference the interval
  TimerInterval = setInterval(() => {
      // console.log( 'timer rendaring 1scound ');
    const minutes = parseInt(timer / 60, 10);
    const secound = parseInt(timer % 60, 10);

    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;
    const displaySecound = secound < 10 ? '0' + secound : secound;

    TimerDisplay.innerText = displayMinutes + ':' + displaySecound;

    if (--timer < 0) {
        // setinterval stop korte hobe tar jonno likte hoi clearInterval
      clearInterval(TimerInterval);
      TimerDisplay.innerText = 'BREATH OUT';
          // 3000 milisecound por punoriea abr Breath in start hobe 
      setTimeout(() => {
        TimerDisplay.innerText = 'BREATH IN';
        startTimer(timeLeft);
      }, 3000);
    }
  }, 1000);
};
// stop button click then BREATH IN likha utba abr agine start korle chalu hobe
const StopTimer = () => {
  // This will now correctly stop the global TimerInterval
  clearInterval(TimerInterval);
  TimerDisplay.textContent = 'BREATH IN';
};

StartDisplay.addEventListener('click', () => {
     // console.log('start')
    // isRunnig Default man ocche false 
    // condition !isRunnig jodi false na hoi  tahole conditon er vitore dhuke tr kaj korbe
  if (!isRunnig) {
    timeLeft = 90;
    startTimer(timeLeft);
    isRunnig = true;
  }
});

StopDisplay.addEventListener('click', () => {
      // console.log('stops');
  StopTimer();
  isRunnig = false;
});