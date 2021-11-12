/*===BURGER=======================================================*/
const headerBurger = document.querySelector('.header__burger')
const headerMenu = document.querySelector('.header__menu')
const body = document.body
headerBurger.addEventListener('click', function () {
	headerBurger.classList.toggle('active')
	headerMenu.classList.toggle('active')
	body.classList.toggle('lock')
})
/*==========================================================*/

/*===SCROLL=======================================================*/
const header = document.querySelector('.header')
const headerHeight = header.offsetHeight;
window.addEventListener('scroll', () => {
	let scroll = window.scrollY
	if (scroll >= headerHeight / 2)
		header.classList.add('headerF')
	else {
		header.classList.remove('headerF')
	}
})
/*===SCROLL=======================================================*/
