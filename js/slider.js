"use strict";

const popularSlider = new Swiper('.popular-slider', {
	spaceBetween: 15,
	slidesPerView: 1.5,
	slidesOffsetAfter: 15,
	slidesOffsetBefore: 15,
});

const mainNavigationSlider = new Swiper('.main-navigation-slider', {
	spaceBetween: 5,
	slidesOffsetAfter: 15,
	slidesOffsetBefore: 15,
	slidesPerView: 'auto',

	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: false,
		hide: true,
	}
});