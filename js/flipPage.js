let pages = document.querySelectorAll('body > .page');


window.onload = function(){
	
}
window.onresize = function(){
	setPseudoPage()	
}

function setPseudoPage(){

	pages.forEach((page)=>{
		let image = page.querySelector('svg image');
		let w = getSize(image)[0];
		let h = getSize(image)[1];

		let buttons = page.querySelector('.flipButtons');
		buttons.style.width = w +'px';
		buttons.style.height = h +'px';
	})
	
}

function getSize(e){
	let rect = e.getBoundingClientRect();
	let w = rect.width;
	let h = rect.height;
	return [w, h];
}





window.onload = function(){
	setPseudoPage()
	reversePageOrder()
	// for(let i=0; i<pages.length-1; i+=1){
	// 	next(pages[i])
	// }
	// for(let i=1; i<pages.length; i+=1){
	// 	prev(pages[i])
	// }
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
			page.style.opacity = '0';	
			setTimeout(() => hide(page), 220);
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
			setTimeout(() => show(page.nextElementSibling), 10);
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