//Open off-canvas menu upon icon click
const menuBtn = document.querySelector('.menu');
const menuCloseBtn = document.querySelector('.menu-close');
const offCanvas = document.querySelector('.off-canvas');

loadEventListeners();

function loadEventListeners() {
	//Listen to menu button click
	menuBtn.addEventListener('click', showMenu);
	menuCloseBtn.addEventListener('click', hideMenu);
}


function hideMenu (e) {
	
	setTimeout(function() {
		offCanvas.classList.remove('shown');
	}, 0);

	e.preventDefault();
}

function showMenu (e) {

	setTimeout(function() {
		offCanvas.classList.add('shown');
	}, 0);

	e.preventDefault();
}