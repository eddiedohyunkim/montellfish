let pageImg = document.querySelector('image.page');
let pseudoPage = document.querySelector('.pseudoPage');
let opener = document.querySelector('.opener');

window.onload = function(){
	setPseudoPage()
	removePseudoPage()
}
window.onresize = function(){
	setPseudoPage()	
}

function removePseudoPage(){
	opener.addEventListener('click', function(){
		this.style.opacity = '0';
		setTimeout(() => this.remove(), 500);
	})
}

function setPseudoPage(){
	let w = getSize(pageImg)[0];
	let h = getSize(pageImg)[1];
	pseudoPage.style.width = w +'px';
	pseudoPage.style.height = h +'px';
}

function getSize(e){
	let rect = e.getBoundingClientRect();
	let w = rect.width;
	let h = rect.height;
	return [w, h];
}