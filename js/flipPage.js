let pages = document.querySelectorAll('body > .page');

function getSize(e){
	let rect = e.getBoundingClientRect();
	let w = rect.width;
	let h = rect.height;
	return [w, h];
}

window.onload = function(){
	reversePageOrder()
	pages.forEach((page)=>{
		next(page)
		prev(page)
	})
}

function next(page){
	let nextButton = page.querySelector('.next');
	nextButton.addEventListener('click', function(){
		if(
			page.previousElementSibling !== null && 
			page.previousElementSibling.classList.contains('page')
		){
			// page.style.opacity = '0';	
			// setTimeout(() => hide(page), 220);
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
			// setTimeout(() => show(page.nextElementSibling), 10);
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