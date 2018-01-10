//--------------------
//Show the side menu
//--------------------
var iconMenu = document.querySelector("#icon-menu");
iconMenu.addEventListener("click", showMenu);

function showMenu(){
	var menu = document.querySelector("#main-menu");
	menu.classList.add("show-menu");
}

//--------------------
//Hide the side menu
//--------------------
var menuShadow = document.querySelector(".menu-shadow");
var xMenu = document.querySelector("#close-menu");

menuShadow.addEventListener("click", closeMenu);
xMenu.addEventListener("click", closeMenu);

function closeMenu(){
	var menu = document.querySelector("#main-menu");
	menu.classList.remove("show-menu");
}