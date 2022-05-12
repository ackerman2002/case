"use strict";

const menu = document.querySelector('.header__menu');

if (menu) {
	const menuButtonBurger = document.querySelector('.header__icon');
	const menuButtonClose = document.querySelector('.menu__icon');

	menuButtonBurger.addEventListener("click", menuOpen);
	menuButtonClose.addEventListener("click", menuClose);

	function menuOpen() {
		menu.classList.add('_active');
		document.body.classList.add('_lock');
	}

	function menuClose() {
		menu.classList.remove('_active');
		document.body.classList.remove('_lock');
	}
}