'use strict'

const cookies = document.getElementById('cookie'),
			clickCounter = document.getElementById('clicker__counter'),
			clickSpeed = document.getElementById('clicker__speed');

let clickTime = 0;

cookies.onclick = function(){
	clickCounter.textContent = Number(clickCounter.textContent) + 1;
	
	if(clickCounter.textContent % 2 === 0){
		this.height -= 20;
		this.width -= 20;
	} else {
		this.height += 20;
		this.width += 20;
	}
	
	let clickTimeNew = clickTime;
	clickTime = new Date();
	let rezult = 1000 / (clickTime - clickTimeNew);

	clickSpeed.textContent = rezult.toFixed(2);
};