AOS.init();
const mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

$('.autoplay').slick({
	autoplay: true,
	autoplaySpeed: 2000,
	slidesToShow: 3,
	slidesToScroll: 3,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				// arrows: true,
				slidesToShow: 2
			}
		},
		{
			breakpoint: 480,
			settings: {
				// arrows: true,
				slidesToShow: 1
			}
		}
	]
});

// function matchMedia(width) {
// 	return window.matchMedia(`(max-width: ${width}px)`);
// }


// const video1 = document.getElementById('video1');
// console.log('scrollWidth: ', window.scrollWidth);
// if (matchMedia(1200)) {
// 	console.log('we are 1200')
// 	video1.style.width = '900px';
// 	video1.style.height = '450px';
// 	video1.style.border = '5px solid red';
// }
// if (matchMedia(900)) {
// 	console.log('we are 900')
// 	video1.style.width = '600px';
// 	video1.style.height = '350px';
// 	video1.style.border = '5px solid green';;
// }
// if (matchMedia(600)) {
// 	console.log('we are 600')
// 	video1.style.width = '300px';
// 	video1.style.height = '250px';
// 	video1.style.border = '5px solid blue';
// }

// (

// 	function videpAdopter() {
// 		const video1 = document.getElementById('video1');
// 		console.log('scrollWidth: ', window.scrollWidth);
// 		if (matchMedia(1200)) {
// 			console.log('we are 1200')
// 			video1.style.width = '900px';
// 			video1.style.height = '450px';
// 			video1.style.border = '5px solid red';
// 		}
// 		if (matchMedia(900)) {
// 			console.log('we are 900')
// 			video1.style.width = '600px';
// 			video1.style.height = '350px';
// 			video1.style.border = '5px solid green';;
// 		}
// 		if (matchMedia(600)) {
// 			console.log('we are 600')
// 			video1.style.width = '300px';
// 			video1.style.height = '250px';
// 			video1.style.border = '5px solid blue';
// 		}
// 	}
// )();