"use strict";

const mainNavigation = document.querySelector('.main-navigation');
const mainNavigationPosition = mainNavigation.getBoundingClientRect().top + mainNavigation.offsetHeight;
console.log()

if (mainNavigation) {
	const mainNavigationLinkHome = document.getElementById('link-logo');

	window.addEventListener('scroll', () => {

		if (pageYOffset > mainNavigationPosition) {
			mainNavigationLinkHome.style.position = 'relative';
			mainNavigationLinkHome.style.left = '0px';
			mainNavigation.style.position = 'fixed';
			mainNavigation.classList.add('_fixed');
		}

		if (pageYOffset <= mainNavigationPosition) {
			mainNavigationLinkHome.style.position = 'absolute';
			mainNavigationLinkHome.style.left = '-100%';
			mainNavigation.style.position = 'relative';
			mainNavigation.classList.remove('_fixed');
		}
	});
}
