let pages = document.querySelectorAll('body > .page');

window.onload = function(){
	reversePageOrder()
	for(let i=0; i<pages.length-1; i+=1){
		next(pages[i])
	}
	for(let i=1; i<pages.length; i+=1){
		prev(pages[i])
	}
}

function next(page){
	let nextButton = page.querySelector('.next');
	nextButton.addEventListener('click', function(){
		page.style.opacity = '0';
		setTimeout(() => hide(page), 220);
	})
}

function prev(page){
	let prevButton = page.querySelector('.prev');
	prevButton.addEventListener('click', function(){
		console.log('prev!')
		console.log(page.nextElementSibling.id)
		page.nextElementSibling.classList.remove('hide');
		setTimeout(() => show(page.nextElementSibling), 10);
		
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
		console.log(i)
	}
}