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


