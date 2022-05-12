"use strict";

let itemData = getdData();
unloadData(itemData["totalPrices"], itemData["totalCount"]);

window.onclick = function (event) {

	// если нажали на кнопку plus
	if (event.target.dataset.action === "plus") {
		const item = event.target;
		const itemParent = item.closest('[data-product]');
		const itemPrice = itemParent.querySelector("[data-price]");
		const itemCount = itemParent.querySelector("[data-counter]");

		let tpmPrice = Number(itemPrice.innerText.replace(/[^0-9]/g, '')) / Number(itemCount.innerText);
		itemPrice.innerText = `${String(Number(itemPrice.innerText.replace(/[^0-9]/g, '')) + tpmPrice).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сум`;

		itemCount.innerText = ++itemCount.innerText;
		itemData["totalPrices"] = itemData["totalPrices"] + tpmPrice;
		itemData["totalCount"] = itemData["totalCount"] + 1;
	}

	// если нажали на кнопку minus
	if (event.target.dataset.action === "minus") {
		const item = event.target;
		const itemParent = item.closest('[data-product]');
		const itemPrice = itemParent.querySelector("[data-price]");
		const itemCount = itemParent.querySelector("[data-counter]");



		let tpmPrice = Number(itemPrice.innerText.replace(/[^0-9]/g, '')) / Number(itemCount.innerText);
		itemPrice.innerText = `${String(Number(itemPrice.innerText.replace(/[^0-9]/g, '')) - tpmPrice).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сум`;

		itemData["totalPrices"] = itemData["totalPrices"] - tpmPrice;
		itemData["totalCount"] = itemData["totalCount"] - 1;

		if (itemCount.innerText === "1") {
			itemParent.style.display = 'none';
		}

		itemCount.innerText = --itemCount.innerText;
		unloadData(itemData["totalPrices"], itemData["totalCount"]);
	}

	// если нажали на кнопку add
	if (event.target.offsetParent.dataset.action === "add") {
		const itemParent = event.target.offsetParent;
		const itemPrice = itemParent.querySelector('[data-price]').innerText;
		const itemTitle = itemParent.querySelector('[data-title]').innerText;
		const itemSrc = itemParent.querySelector('[data-img]').getAttribute('src');
		const itemAlt = itemParent.querySelector('[data-img]').getAttribute('alt');
		let priceTmp = Number(itemPrice.replace(/[^0-9]/g, ''));
		const domList = document.querySelectorAll('.pay__item');
		const li = domList[domList.length - 1];

		itemData["totalPrices"] = itemData["totalPrices"] + priceTmp;
		itemData["totalCount"] = itemData["totalCount"] + 1;

		itemParent.style.display = "none";
		unloadData(itemData["totalPrices"], itemData["totalCount"]);

		li.insertAdjacentHTML('afterend', `
		<li data-product class="pay__item item-pay">
		<div class="item-pay__body">
			<div class="item-pay__content">
				<div class="item-pay__img">
					<img src="${itemSrc}" alt="${itemAlt}">
				</div>
				<div class="item-pay__wrapper">
					<div class="item-pay__title">${itemTitle}</div>
				</div>
			</div>
			<div class="item-pay__footer">
				<div data-price class="item-pay__price">${itemPrice} сум</div>
				<div class="item-pay__counter item__counter">
					<button class="item__control icon-minus" data-action="minus"></button>
					<div class="item__current" data-counter>1</div>
					<button class="item__control icon-plus" data-action="plus"></button>
				</div>
			</div>
		</div>
	</li>
	`);
		insertAdjacentHTML()

	}
	unloadData(itemData["totalPrices"], itemData["totalCount"]);
}


// Обновляем данные при загрузке страницы
function unloadData(totalPrices, totalCount) {
	const counts = document.querySelectorAll('[data-value]');
	const prices = document.querySelectorAll('[data-total-price]');
	const itemDodo = document.querySelector('[data-dodo]');
	itemDodo.innerText = Math.ceil(totalPrices * 0.0005);
	// Меняем все значения
	counts.forEach(count => {
		count.innerText = totalCount;
	});

	// Меняем все значения
	prices.forEach(price => {
		price.innerText = String(totalPrices).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
	});

}

// Получем данные
function getdData() {
	const itemPayPrices = document.querySelectorAll('.item-pay__price');
	const itemPayCounts = document.querySelectorAll('.item__current');

	let totalPrices = 0;
	let totalCount = 0;

	// Сумма
	itemPayPrices.forEach(itemPayPrice => {
		totalPrices = totalPrices + +itemPayPrice.innerText.replace(/[^0-9]/g, '');
	});

	// Сумма
	itemPayCounts.forEach(itemPayCount => {
		totalCount = totalCount + +itemPayCount.innerText.replace(/[^0-9]/g, '');
	});

	const itemData = {
		"totalPrices": totalPrices,
		"totalCount": totalCount,
	}

	return itemData;
}