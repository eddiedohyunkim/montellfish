let pages = document.querySelectorAll('body > .page');
let pseudoPage = document.querySelector('.flipButtons');

function getSize(e){
	let rect = e.getBoundingClientRect();
	let w = rect.width;
	let h = rect.height;
	return [w, h];
}

window.onload = function(){
	reversePageOrder()
	

	pages.forEach((page)=>{
		setPseudoPage(page)
		next(page)
		prev(page)
	})
}

window.onresize = function(){
	pages.forEach((page)=>{
		setPseudoPage(page)	
	})
}

function setPseudoPage(page){
	let pseudoPage = page.querySelector('.buttonGroup');
	let pageImg = page.querySelector('svg > image');
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

function next(page){
	let nextButton = page.querySelector('.next');
	nextButton.addEventListener('click', function(){
		if(
			page.previousElementSibling !== null && 
			page.previousElementSibling.classList.contains('page')
		){
			page.classList.add('hide');
		}
	})
}

function prev(page){
	let prevButton = page.querySelector('.prev');
	prevButton.addEventListener('click', function(){
		if(
			page.nextElementSibling !== null && 
			page.nextElementSibling.classList.contains('page')
		){
			page.nextElementSibling.classList.remove('hide');
		}
	})
}

function show(page){
	page.style.opacity = '100';
}	

function hide(page){
	page.classList.add('hide');
}	

function reversePageOrder(){
	i = pages.length;
	for(; i--;){ 
		document.body.insertBefore(pages[i], document.currentScript)
	}
}