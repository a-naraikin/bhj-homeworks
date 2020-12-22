'use strict'

let elemLength = document.getElementsByClassName('hole');

let countDead = document.getElementById('dead');
let countLost = document.getElementById('lost');

let reset = () => { countDead.textContent = 0; countLost.textContent = 0; };

function init() {
	for(let i = 1; i <= elemLength.length; i++){
		let getHole =	document.getElementById(`hole${i}`);
		
		getHole.onclick = function(){
			(getHole.className == 'hole hole_has-mole') ? countDead.textContent = +countDead.textContent + 1 : countLost.textContent = +countLost.textContent + 1;
			
			if(countDead.textContent == 10){
				alert('Победа!');
				reset();
			}
			
			if(countLost.textContent == 5){
				alert('Вы проиграли!');
				reset();
			}
		}
	}
}

init();