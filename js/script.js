
$(document).ready(function(){
    $('.slider').slick({
    arrows:true,
    dots:true,
    adaptiveHright:true,
    slidesToShow:3,
    slidesToScroll:3,
    autoplay:true,
    infinite:true,
    speed:1500,
    autoplaySpeed:1500,
    responsive:[
			{
				breakpoint: 1024,
				settings: {
					slidesToShow:2
          
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			}
		]
    });
});

var mybutton = document.getElementById("myBtn");
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




var toggleButton = document.querySelector('.burger-bar');
var navBar = document.querySelector('.burger-nav');


toggleButton.addEventListener('click', function () {
	navBar.classList.toggle('change');

});
