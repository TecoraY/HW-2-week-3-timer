/*let colors=["black", "white", "gold"]
const gridClick= document.querySelector(".grid")
{
    gridClick.addEventListener;{"click"; ()=>{}

    }}*/

//define variables and connect to html
var seconds= 00;
var minutes = 00;
var OutputSeconds= document.getElementById('seconds');
var OutputMinutes= document.getElementById('minutes');
var buttonStart= document.getElementById('btnStart');
var buttonStop= document.getElementById('btnStop');
var buttonReset= document.getElementById('btnReset');
var Interval;

//button functionality.
//start
buttonStart.addEventListener('click', ()=>{
  clearInterval(Interval);
  Interval= setInterval(startTime, 1000);
});
//stop
buttonStop.addEventListener('click', ()=>{
  clearInterval(Interval);
});
//reset
buttonReset.addEventListener('click', () =>{
  clearInterval(Interval);
  minutes= "00";
  seconds= "00";
  OutputSeconds.innerHTML=seconds;
  OutputMinutes.innerHTML=minutes;
});

//use defined variables and connection to html to get 
//clock to start counting
//++ will add 1 to seconds and mins
//once seconds hit 60 it will thenswitch over to mins

function startTime(){
  seconds++;
  if(seconds<=9){
    OutputSeconds.innerHTML= "0" + seconds;
  }
  if(seconds>9){
    OutputSeconds.innerHTML= seconds;
  }
  if( seconds>60 ){
    minutes++;
    OutputMinutes.innerHTML= "0" + minutes;
    seconds=0;
    OutputSeconds.innerHTML= "0"+ seconds;
  }
  if(minutes>9){
    OutputMinutes.innerHTML= minutes;

  }
}
//needs to be interactive. how to get the minutes to be able to be entered and 
//timer still work?



