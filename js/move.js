"use strict";

const menuLinks = document.querySelectorAll('.main-navigation__link[data-goto]');

if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	const mainNavigation = document.querySelector('.main-navigation');

	window.addEventListener('scroll', () => {

		menuLinks.forEach(menuLink => {
			const child = menuLink;
			const gotoBlock = document.getElementById(child.dataset.goto);
			const gotoBlockPositionTop = gotoBlock.getBoundingClientRect().top + pageYOffset - mainNavigation.clientHeight - 30;
			const gotoBlockPositionBottom = gotoBlock.getBoundingClientRect().bottom + pageYOffset - mainNavigation.clientHeight;

			if (pageYOffset > gotoBlockPositionTop && pageYOffset < gotoBlockPositionBottom) {
				child.classList.add('link_active');
			} else {
				child.classList.remove('link_active');
			}
		});
	});

	// Прокрутка при клике
	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.getElementById(menuLink.dataset.goto)) {
			const gotoBlock = document.getElementById(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.main-navigation').offsetHeight;
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth",
			});
			e.preventDefault();
		}
	}
}