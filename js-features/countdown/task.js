'use strict'

let variable = document.getElementById('timer');
let countCurrent = variable.textContent;
let intervals = null;

let interval = () => intervals = setInterval(count, 1000);

function count(){
  if(countCurrent > 0){
    countCurrent--;
    let currentTime = getCurrentFormattedTime(countCurrent);
    variable.textContent = currentTime;
  } else {
    alert('Вы победили в конкурсе!');
    window.location.assign('https://i.picsum.photos/id/492/900/700.jpg?hmac=Dd1Lo0AJMQnlvZEKfc_-9v3KUf1WbzkDccxhdmOrRcM');
    clearInterval(intervals);
  }	
}

function getCurrentFormattedTime(elem){
  const today = new Date(elem * 1000);
		
  const hours = today.getUTCHours() < 10 ? `0${today.getUTCHours()}` : `${today.getUTCHours()}`;
  const minutes = today.getUTCMinutes() < 10 ? `0${today.getUTCMinutes()}` : `${today.getUTCMinutes()}`;
  const seconds = today.getUTCSeconds() < 10 ? `0${today.getUTCSeconds()}` : `${today.getUTCSeconds()}`;

  return `${hours}:${minutes}:${seconds}`;
}

interval();
