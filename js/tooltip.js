"use strict";

const aboutTooltip = document.querySelector('.tooltip-about');

if (aboutTooltip) {
	const aboutTooltipButtonOpen = document.querySelector('.about__icon');
	const aboutTooltipButtonClose = document.querySelector('.tooltip-about__close');

	aboutTooltipButtonOpen.addEventListener("click", tooltipAboutOpen);
	aboutTooltipButtonClose.addEventListener("click", tooltipAboutClose);

	function tooltipAboutOpen() {
		aboutTooltip.classList.toggle('_active');
	}

	function tooltipAboutClose() {
		aboutTooltip.classList.remove('_active');
	}
}