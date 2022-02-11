//MENU
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

function  menuClose(){
  menu.classList.toggle
}
//MENU 

//MODAL
var elements = $('.modal-overlay, .modal');

$('#myButtonId').click(function(){
    elements.addClass('active');
});

$('.close-modal').click(function(){
    elements.removeClass('active');
});
//MODAL


//Carousel COMENTO TU CODIGO PARA PROBAR QUE ESTA ROTO

//window.addEventListener('load', function(){
 // new Glider(document.querySelector('.carousel-lista'), {
   // slidesToShow: 5,
   // slidesToScroll: 5,
//dots: '.carousel-indicadores',
   // arrows: {
//prev: '.carousel-anterior',
    //  next: '.carousel-siguiente'
//}
 // } );

//});

//
new Glider(document.querySelector('.carousel__lista'), {
  slidesToShow: 1,
  dots: '.carousel__indicadores',
  draggable: true,
  arrows: {
    prev: '.carousel__anterior',
    next: '.carousel__siguiente'
  }
});


window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: '.carousel__indicadores',
		arrows: {
			prev: '.carousel__anterior',
			next: '.carousel__siguiente'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 450,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 800,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		]
	});
});

