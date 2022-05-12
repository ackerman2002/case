'use strict';

const popupBody = document.querySelector('.popup__body');
const popupContent = document.querySelector('.popup__content');
const popupImgPosition = document.querySelector('.popup__img');

// // отследить нажатие
popupImgPosition.ontouchstart = function (e) {

	// переместить объект
	function moveAt(e) {
		if (e.changedTouches[0].clientY > 0 && popupBody.scrollTop == 0) {
			popup.style.top = `${e.changedTouches[0].clientY / 2}px`;
		} else {
		}
	}

	// перемещение по экрану
	document.ontouchmove = function (e) {
		moveAt(e);
	}

	// отследить окончание переноса
	popup.ontouchend = function () {
		if (popup.getBoundingClientRect().top > document.documentElement.clientHeight / 2) {
			popupClose();
			popup.style.top = null;
		} else {
			popup.style.top = null;
		}

		document.touchmove = null;
		popup.touchstart = null;
	}
}
