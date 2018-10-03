//Open off-canvas menu upon icon click

const showMoreInfo = document.querySelectorAll('.more-info');


loadEventListeners();

function loadEventListeners() {
	//Listen to menu button click
	document.body.addEventListener('click', showMore);	
}


function showMore(e){
	if(e.target.parentElement.classList.contains('project-more')){
		
		//Close other open infos
		showMoreInfo.forEach(function(moreInfo) {
			moreInfo.classList.remove('shown');
		})

		e.target.parentElement.parentElement.nextElementSibling.classList.add('shown');
	}

	if (e.target.classList.contains('button-close')){
		e.target.parentElement.parentElement.parentElement.classList.remove('shown');
	}

	e.preventDefault();
}