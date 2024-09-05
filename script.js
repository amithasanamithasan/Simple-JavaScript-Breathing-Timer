let=timeLeft;
const TimerDisplay= document.getElementById('timer')
const StartDisplay= document.getElementById('start-btn')
const StopDisplay= document.getElementById('stop-btn')
const startTimer=(time)=>{
// console.log('start Timer Runnings')
let timer= time;
  const TimerInterval=  setInterval(()=>{
    // console.log( 'timer rendaring 1scound ');
       const minutes= parseInt(timer / 60 , 10);
       const secound=parseInt(timer % 60 ,10)

   const displayMinutes=    minutes<10 ?  '0'+minutes: minutes;
 const displaySecound =    secound<10? '0'+ secound: secound;
 
TimerDisplay.innerText=minutes +':'+secound;

if(--timer<0){
    // setinterval stop korte hobe tar jonno likte hoi clearInterval
    clearInterval(TimerInterval);
    TimerDisplay.innerText=('BREATH OUT');
    // 3000 milisecound por punoriea abr Breath in start hobe 
   setTimeout(()=>{
    TimerDisplay.innerText='BREATH IN';
    startTimer(timeLeft);
   },3000)
}

},1000);

}
StartDisplay.addEventListener('click',()=>{
    // console.log('start')
    timeLeft=90;
    startTimer(timeLeft);
})

StopDisplay.addEventListener('click',()=>{
    // console.log('stops');
})