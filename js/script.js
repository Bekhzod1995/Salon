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