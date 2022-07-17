const hamburgerMenuBtn = document.querySelector(".hamburger-menu-icon")
const mobileMenu = document.querySelector(".mobile-menu")

hamburgerMenuBtn.addEventListener ("click",function(){
	hamburgerMenuBtn.classList.toggle("hamburger-menu-icon--open")
	mobileMenu.classList.toggle("mobile-menu--open")
})