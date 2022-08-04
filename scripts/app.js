const hamburgerMenuBtn = document.querySelector(".hamburger-menu-icon")
const mobileMenu = document.querySelector(".mobile-menu")
const like = document.querySelectorAll(".place__like")
const likeHeart = document.querySelectorAll(".place__like-icon")
const showAllBtn = document.querySelector(".destinations__btn")
const placeContainer = document.querySelector(".destinations__items")
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
			e.currentTarget.children[0].classList.toggle("place__like-icon--fill")
		})
	})

	showAllBtn.addEventListener("click",function(){
		if (showAllBtn.innerHTML=="View All") {
			placeContainer.style.height="auto";
			showAllBtn.innerHTML="Loss";	
		} else {
			showAllBtn.innerHTML="View All";
			placeContainer.style.height="85rem";
		}
	})

