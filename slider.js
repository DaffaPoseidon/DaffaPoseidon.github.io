const containerSlide = document.querySelector(".container-slide");
const containerImage = document.querySelectorAll(".container-slide img");

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = containerImage[0].clientWidth;

containerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button Listeners

nextBtn.addEventListener('click',()=>{
	if(counter >= containerImage.length - 1) return;
	containerSlide.style.transition = "transform 1s ease-in-out";
	counter++;
	containerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

prevBtn.addEventListener('click',()=>{
	if(counter <= 0) return;
	containerSlide.style.transition = "transform 1s ease-in-out";
	counter--;
	containerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

});

containerSlide.addEventListener('transitioned', ()=>{
	if(containerImage[counter].id === 'klonTerakhir'){
		containerSlide.style.transform = "none";
		counter = containerImage.length - 2;
		containerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}

	if(containerImage[counter].id === 'klonPertama'){
		containerSlide.style.transform = "none";
		counter = containerImage.length - counter;
		containerSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

	}
});