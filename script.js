const TimerDisplay= document.getElementById('timer')
const StartDisplay= document.getElementById('start-btn')
const StopDisplay= document.getElementById('stop-btn')
const startTimer=(time)=>{
// console.log('start Timer Runnings')
let timer= time;
    setInterval(()=>{
       const minutes= parseInt(timer / 60 , 10);
       const secound=parseInt(timer % 60 ,10)
// console.log( 'timer rendaring 1scound '); 
TimerDisplay.innerText=minutes +':'+secound;
},1000);

}
StartDisplay.addEventListener('click',()=>{
    // console.log('start')
    const timeLeft=90;
    startTimer(timeLeft);
})

StopDisplay.addEventListener('click',()=>{
    // console.log('stops');
})