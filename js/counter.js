"use strict";

// url куда отправить JSON =================================================================================================================================
const url = '';
// =========================================================================================================================================================

const basketValue = document.querySelector('.basket__value');
const popup = document.querySelector('.popup');
const popupButtonClose = document.querySelector('.popup__close');
popupButtonClose.addEventListener("click", popupClose);

const items = {};
let count = 0;
// Размер и тип по умолчанию
const defaultSize = '30';
const dafaultType = 'Традиционное';
const defaultSelectPrices = 0;

// Изменяемые данные
let size = defaultSize;
let type = dafaultType;
let defaultPrice;
let selectPrices = 0;
window.addEventListener("click", function (event) {

	if (event.target.offsetParent.dataset.action === 'select') {
		const select = event.target.offsetParent;
		const selectPrice = select.querySelector('.add-popup__price').innerText.replace(/[^0-9]/g, '');

		if (select.classList.contains("_select")) {
			select.classList.remove('_select');
			selectPrices -= +selectPrice;
		} else {
			selectPrices += +selectPrice;
			select.classList.add('_select');
		}
		console.log(selectPrices);
		changePrice(size, defaultPrice, selectPrices);
	}

	if (event.target.dataset.action === 'change') {
		const selected = document.querySelectorAll('._select');
		if (selected.length != 0) {
			selected.forEach(select => {
				select.classList.remove('_select');
			});
		}
		selectPrices = 0;
		const defaultData = change(event.target, defaultSize, dafaultType);

		defaultPrice = changePrice(defaultData["size"], defaultData["price"], selectPrices);
		popupOpen(defaultData["title"], defaultData["text"], defaultData["src"], defaultData["size"], defaultData["type"]);
	}

	if (event.target.dataset.action === 'choice') {
		if (event.target.dataset.size) {
			size = choiceSize(event.target);
		}

		if (size === '25') {
			type = "Традиционное";
		} else if (event.target.dataset.type) {
			type = choiceType(event.target);
		}

		choiceMove(size, type);

		changePrice(size, defaultPrice, selectPrices);
	}

	if (event.target.dataset.action === 'add') {
		const currentItem = event.target;
		const currentParent = currentItem.closest('[data-product]');
		const currentItemButton = currentParent.querySelector('[data-action]');
		const itemTitle = currentParent.querySelector('[data-title]').innerText;

		if (currentItem.dataset.type === "pizza") {
			const itemSize = currentParent.querySelector('[data-value-size]').innerText;
			items[currentParent.dataset.product + count] = collectDataItem(currentItem);
			count++;
			popupClose();
			message('Добавлено', itemTitle, itemSize);
		} else {
			currentItemButton.style.display = 'none';
			currentParent.querySelector('.item__counter').style.display = 'inline-flex';
			currentParent.querySelector('[data-counter]').innerText = +currentParent.querySelector('[data-counter]').innerText + 1;
			items[currentParent.dataset.product] = collectDataItem(event.target);
			message('Добавлено', itemTitle, 1);
		}
		console.log(items);
		basketValue.innerText = ++basketValue.innerText;
		basket.style.display = 'block';
	}

	if (event.target.dataset.action === 'plus') {
		const currentItem = event.target;
		const currentCounter = currentItem.closest('.item__counter').querySelector('.item__current');
		const currentParent = currentItem.closest('[data-product]').dataset.product;
		const itemTitle = currentItem.closest('[data-product]').querySelector('[data-title]').innerText;

		message('Добавлено', itemTitle, 1);

		setTimeout(function () {
			currentCounter.innerText = +currentCounter.innerText + 1;
			basketValue.innerText = ++basketValue.innerText;
			items[currentParent] = collectDataItem(currentItem);
		}, 500);
	}

	if (event.target.dataset.action === 'minus') {
		const currentItem = event.target;
		const currentCounter = currentItem.closest('.item__counter').querySelector('.item__current');
		const currentCounterBody = currentItem.closest('.item__counter');
		const currentParent = currentItem.closest('[data-product');
		const currentButton = currentParent.querySelector('.item__button');
		const itemTitle = currentParent.querySelector('[data-title]').innerText;
		message('Удалено', itemTitle, 1);
		setTimeout(function () {
			currentCounter.innerText = +currentCounter.innerText - 1;
			basketValue.innerText = --basketValue.innerText;

			if (currentCounter.innerText > "0") {
				items[currentParent.dataset.product] = collectDataItem(currentItem);
			} else {
				delete items[currentParent.dataset.product];
				currentButton.style.display = 'inline-flex';
				currentCounterBody.style.display = 'none';
			}

			if (basketValue.innerText === "0") {
				basket.style.display = "none";
			}
		}, 500);
	}

	// Возвращает значение size
	function choiceSize(target) {
		const item = target;
		const size = item.getAttribute('data-size');

		return size;
	}

	// Возвращает значение type
	function choiceType(target) {
		const item = target;
		const type = item.getAttribute('data-type');

		return type;
	}

	function choiceMove(size, type) {
		const sizePointer = document.querySelector('.size-popup__pointer');
		const typePointer = document.querySelector('.type-popup__pointer');
		if (size === '25') {
			typePointer.dataset.offset = "disabled";
		} else if (type != 'null') {
			typePointer.dataset.offset = type;
		}

		if (size != 'null') {
			sizePointer.dataset.offset = size;
		}

		popup.querySelector('[data-value-size]').innerText = size;
		popup.querySelector('[data-value-type]').innerText = type;
	}
});

function message(action, itemTitle, itemValue) {
	const basketMessage = document.querySelector('.basket__message');
	const basketMessageTitle = basketMessage.querySelector('.basket__message-title');
	const basketMessageSubtitle = basketMessage.querySelector('.basket__message-subtitle');

	if (itemValue != 1) {
		basketMessageSubtitle.innerText = `${itemTitle}, ${itemValue}см`;
	} else {
		basketMessageSubtitle.innerText = `${itemTitle}, 1 шт`;
	}

	basketMessageTitle.innerText = `${action}:`;

	basketMessage.style.display = 'block';
	setTimeout(function () {
		basketMessage.style.display = 'none';
	}, 500);

}

// Собираем данные о продукте
function collectDataItem(target) {
	// Текущий item
	let currentItem = target.closest('[data-product]');
	let itemTitle = currentItem.querySelector('[data-title]').innerText;
	let itemText = currentItem.querySelector('[data-text]').innerText;
	let itemSrc = currentItem.querySelector('[data-img]').getAttribute('src');
	let itemPrice = currentItem.querySelector('[data-price]').innerText;
	let itemSize = currentItem.querySelector('[data-value-size]');
	let itemType = currentItem.querySelector('[data-value-type]');
	let itemValue = currentItem.querySelector('[data-counter]');

	// Убирает все буквы и пробелы
	itemPrice = itemPrice.replace(/[^0-9]/g, '');

	const dataItemObject = {
		"itemTitle": itemTitle,
		"itemText": itemText,
		"itemSrc": itemSrc,
		"itemPrice": itemPrice,
	}

	// Проверяем есть ли value
	if (itemValue === null || itemValue.innerText === "0") {
		false;
	} else {
		dataItemObject["itemValue"] = itemValue.innerText;
	}

	// Проверяем есть ли size
	if (itemSize === null) {
		false;
	} else {
		dataItemObject["itemSize"] = itemSize.innerText;
	}

	// Проверяем есть ли type
	if (itemType === null) {
		false;
	} else {
		dataItemObject["itemType"] = itemType.innerText;
	}

	return dataItemObject;
}

// Обновляем данные на начальные
function change(target, defaultSize, defaultType) {
	let item = target.closest('.item');
	const itemTitle = item.querySelector('.item__title').innerText;
	const itemText = item.querySelector('.item__text').innerText;
	const itemSrc = item.querySelector('[data-img]').getAttribute("src");
	const itemPrice = item.querySelector('.item__button').innerText.replace(/[^0-9]/g, '');

	const defaultData = {
		title: itemTitle,
		text: itemText,
		src: itemSrc,
		size: defaultSize,
		price: itemPrice,
		type: defaultType
	}

	return defaultData;
}

// Обновляет цену
function changePrice(size, defaultPrice, selectPrices) {
	let totalPrice;

	if (size === '25') {
		totalPrice = +defaultPrice;
	}

	if (size === '30') {
		totalPrice = +defaultPrice + 20000;
	}

	if (size === '35') {
		totalPrice = +defaultPrice + 39000;
	}

	totalPrice += selectPrices
	popup.querySelector('.popup__buy[data-action]').innerText = `Добавить в корзину за ${String(totalPrice).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')} сум`;

	return defaultPrice;
}

// Открытие попапа и добавление данных
function popupOpen(title, text, src, defaultSize, defaultType) {
	document.querySelector('.size-popup__pointer').dataset.offset = defaultSize;;
	document.querySelector('.type-popup__pointer').dataset.offset = defaultType;;
	popup.querySelector('[data-title]').innerText = title;
	popup.querySelector('[data-text]').innerText = text;
	popup.querySelector('[data-img]').setAttribute("src", src);
	popup.querySelector('[data-value-size]').innerText = defaultSize;
	popup.querySelector('[data-value-type]').innerText = defaultType;

	document.body.classList.add('_lock');
	popup.classList.add('_fixed');
}

function popupClose() {
	document.body.classList.remove('_lock');
	popup.classList.remove('_fixed');
}

document.querySelector('.basket__img').addEventListener("click", () => {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true);
	xhr.setRequestHeader("Content-Type", "application/json");
	var tempData = {
		"items": items
	}
	var data = JSON.stringify(tempData);
	console.log(data);
	xhr.send(data);
});