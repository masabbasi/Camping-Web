const hamburgerMenuBtn = document.querySelector(".hamburger-menu-icon")
const mobileMenu = document.querySelector(".mobile-menu")
let touchStart, touchEnd;

hamburgerMenuBtn.addEventListener ("click",function(){
	hamburgerMenuBtn.classList.toggle("hamburger-menu-icon--open")
	mobileMenu.classList.toggle("mobile-menu--open")
})
mobileMenu.addEventListener('touchstart',
	e => (touchStart = e.targetTouches[0].clientX))

mobileMenu.addEventListener('touchmove',
	e => (touchEnd = e.targetTouches[0].clientX))

mobileMenu.addEventListener('touchend',
	e => {
  	if (touchStart - touchEnd > 45) {
    	mobileMenu.classList.remove('mobile-menu--open');
			hamburgerMenuBtn.classList.remove("hamburger-menu-icon--open")
  	}
	})