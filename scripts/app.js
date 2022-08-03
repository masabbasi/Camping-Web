const hamburgerMenuBtn = document.querySelector(".hamburger-menu-icon")
const mobileMenu = document.querySelector(".mobile-menu")
const like = document.querySelectorAll(".place__like")
const likeHeart = document.querySelectorAll(".place__like-icon")
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

	like.forEach((item) => {
		item.addEventListener("click", (e) => {
			e.target.children[0].classList.toggle("place__like-icon--fill")
		})
	})
	
	likeHeart.forEach((item) => {
		item.addEventListener('click', (e) => {
			e.target.classList.toggle("place__like-icon--fill")
		})
	})