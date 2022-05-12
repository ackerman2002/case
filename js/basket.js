"use strict";

const basket = document.querySelector(".basket");
const basketImg = document.querySelector(".basket__img");

if (basket) {

	window.addEventListener("scroll", () => {
		const scroll = pageYOffset + document.documentElement.clientHeight;
		const pagePositionBottom = document.querySelector(".products").getBoundingClientRect().bottom + pageYOffset - basket.offsetHeight;

		if (scroll >= pagePositionBottom) {
			basket.style.position = 'absolute';
		}

		if (scroll <= pagePositionBottom) {
			basket.style.position = 'fixed';
		}
	})
}