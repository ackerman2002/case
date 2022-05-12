"user strict";

const pizza = {
	"cheeseburger-pizza": {
		"alt": "cheeseburger-pizza",
		"title": "Чизбургер пицца",
		"text": "Митболы из 100% говядины, сыр моцарелла из натурального молока, красный лук, соленые огурчики, томаты, сырный соус",
		"price": 49000,
		"img": "cheeseburger-pizza.jpeg"
	},
	"pepperoni": {
		"alt": "pepperoni",
		"title": "Пепперони",
		"text": "Пепперони из 100% говядины, сыр моцарелла из натурального молока, томатный соус",
		"price": 49000,
		"img": "pepperoni.jpeg"
	},
	"dodo": {
		"alt": "dodo",
		"title": "ДоДо",
		"text": "Индейка, говядина, пепперони из 100% говядины, сыр мацарелла из натурального молока, шампиньоны, сладкий перец, красный лук, томатный соус, томаты",
		"price": 65000,
		"img": "dodo.png"
	},
	"four-seasons": {
		"alt": "four-seasons",
		"title": "Четыре сезона",
		"text": "сыр мацарелла из натурального молока, индейка, пепперони из 100% говядины, брынза, томаты, шампиньоны, томатный соус, итальянские травы",
		"price": 55000,
		"img": "four-seasons.jpeg"
	},
	"cheese-chicken": {
		"alt": "cheese-chicken",
		"title": "Серный цыплёнок",
		"text": "Цыплёнок, мацарелла из натурального молока, сырный соус, томаты",
		"price": 45000,
		"img": "cheese-chicken.jpeg"
	},
	"double-pepperoni": {
		"alt": "double-pepperoni",
		"title": "Двойная пепперони",
		"text": "Пепперони из 100% говядины, увеличиная порция моцареллы из натурального молока, томантый соус",
		"price": 65000,
		"img": "double-pepperoni.jpeg"
	},
	"chizzy-cheddar": {
		"alt": "chizzy-cheddar",
		"title": "Чиззи чеддер",
		"text": "Ветчина из цыплёнока, сладкий перец, моцарелла из натурального молока, томатный соус, итальянские травы, чеснок, сыр чеддер",
		"price": 55000,
		"img": "chizzy-cheddar.jpeg"
	},
	"margarita": {
		"alt": "margarita",
		"title": "Маргарита",
		"text": "Увеличиная порция моцареллыЮ из натурального молока, томаты, итальянские травы, томатный соус",
		"price": 39000,
		"img": "margarita.jpeg"
	},
	"turkey-and-mushrooms": {
		"alt": "turkey-and-mushrooms",
		"title": "Индейка и грибы",
		"text": "Индейка, шампиньоны, увеличиная порция, моцареллы из натурального молока, томатный соус",
		"price": 49000,
		"img": "turkey-and-mushrooms.jpeg"
	},
	"hawaiian": {
		"alt": "hawaiian",
		"title": "Гавайская",
		"text": "Ветчина из цыплёнка, ананасы, моцарелла из натурального молока, томатный соус",
		"price": 49000,
		"img": "hawaiian.jpeg"
	},
	"vegetablesand-mushrooms": {
		"alt": "vegetablesand-mushrooms",
		"title": "Овощи и грибы",
		"text": "Моцарелла из натурального молока, брынза, шампиньоны, сладкий перец, томаты, томатный соус, базилик, красный лук",
		"price": 39000,
		"img": "turkey-and-mushrooms.jpeg"
	},
}

const snacks = {
	"dodster": {
		"alt": "dodster",
		"title": "Додстер",
		"text": "Легендарная горячая закуска с цыплёнком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке",
		"price": 22000,
		"img": "dodster.jpeg"
	},
	"spicy-dodster": {
		"alt": "spicy-dodster",
		"title": "Острый Додстер",
		"text": "Горячая закуска с цыпленком, перцем халапеньо, солеными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке",
		"price": 24000,
		"img": "spicy-dodster.jpeg"
	},
	"dodo-potato": {
		"alt": "dodo-potato",
		"title": "Додо картофель",
		"text": "Ароматный запеченный картофель с итальянскими травами. Стандартная порция.",
		"price": 24000,
		"img": "dodo-potato.png"
	},
	"potato-balls": {
		"alt": "potato-balls",
		"title": "Картофельные шарики",
		"text": "Картофельные шарики с орегано",
		"price": 23000,
		"img": "potato-balls.png"
	},
	"cheese-starter": {
		"alt": "cheese-starter",
		"title": "Сырный Стартер",
		"text": "Горячая закуска с сыром моцарелла, сыром пармезан и сыром чеддер в тонкой пшеничной лепешке",
		"price": 22000,
		"img": "cheese-starter.jpeg"
	},
	"mushroom-starter": {
		"alt": "mushroom-starter",
		"title": "Грибной Стартер",
		"text": "Горячая закуска с шампиньонами, моцареллой и соусом ранч в тонкой пшеничной лепешке",
		"price": 22000,
		"img": "mushroom-starter.jpeg"
	},
	"spicy-dodster": {
		"alt": "spicy-dodster",
		"title": "Острый Стартер",
		"text": "Горячая закуска с колбасками пепперони,  цыпленком, перцем халапеньо, моцареллой и соусом сальса в тонкой пшеничной лепешке",
		"price": 22000,
		"img": "spicy-dodster.jpeg"
	},
	"nuggets": {
		"alt": "nuggets",
		"title": "Наггетсы",
		"text": "Хрустящие запеченные дольки куриного филе в панировке",
		"price": 22000,
		"img": "nuggets.png"
	},
	"caesar-salad": {
		"alt": "caesar-salad",
		"title": "Салат цезарь",
		"text": "Цыпленок, свежие листья салата айсберг, томаты черри, пармезан, пшеничные гренки, итальянские травы, соус цезарь",
		"price": 24000,
		"img": "caesar-salad.jpeg"
	},
	"chicken-wings-md": {
		"alt": "chicken-wings-md",
		"title": "Куриные крылья, стандартная порция",
		"text": "Запеченные куриные крылья в маринаде из соуса барбекю",
		"price": 20000,
		"img": "chicken-wings-md.jpeg"
	},
	"chicken-wings-lg": {
		"alt": "chicken-wings-lg",
		"title": "Куриные крылья, большая порция",
		"text": "Куриные крылья со специями и ароматом копчения, большая порция",
		"price": 32000,
		"img": "chicken-wings-lg.jpeg"
	},
	"rolls-cheese": {
		"alt": "rolls-cheese",
		"title": "Рулетики с сыром",
		"text": "Пепперони из 100% говядины, сыр моцарелла из натурального молока, томатный соус",
		"price": 49000,
		"img": "rolls-cheese.jpeg"
	},
	"rolls-cheese-8": {
		"alt": "rolls-cheese-8",
		"title": "Рулетики с сыром",
		"text": "Сытные рулетики с моцареллой и сырным соусом, 16 шт",
		"price": 25000,
		"img": "rolls-cheese-8.jpeg"
	},
	"pepperoni-rolls-rolls": {
		"alt": "pepperoni-rolls",
		"title": "Рулетики с пепперони",
		"text": "Горячие рулетики с колбасками пепперони, моцареллой и сырным соусом",
		"price": 32000,
		"img": "pepperoni-rolls.jpeg"
	},
	"pepperoni-rolls-rolls-cheese": {
		"alt": "pepperoni-rolls-rolls-cheese",
		"title": "Рулетики с пепперони + Рулетики с сыром",
		"text": "Микс горячих рулетиков с сырным соусом: 8 штук с пепперони и моцареллой, 8 штук с моцареллой",
		"price": 32000,
		"img": "pepperoni-rolls-rolls-cheese.jpeg"
	},
}

const pizzaRow = document.getElementById('pizza');
const snacksRow = document.getElementById('snacks');

// Отрисовывоем пиццы
for (let element in pizza) {

	let li = `<li li data-product="${pizza[element]["alt"]}" data - action="change" class="products-section__item item" >
	<div class="item__body">
		<div class="item__img">
			<img data-img src="img/pizza/${pizza[element]["img"]}" alt="${pizza[element]["alt"]}">
		</div>
		<div class="item__content">
			<div class="item__title">${pizza[element]["title"]}</div>
			<div class="item__text">
				${pizza[element]["text"]}
			</div>
			<div class="item__footer">
				<button class="item__button button button--buy" data-action="change">от ${pizza[element]["price"]} сум</button>
			</div>
		</div>
	</div>
</li>`

	pizzaRow.insertAdjacentHTML('beforeEnd', li);
}

// Отрисовываем закуски
for (let element in snacks) {

	let li = `<li data-product="${snacks[element]["alt"]}" class="products-section__item item">
	<div class="item__body">
		<div class="item__img">
			<img data-img src="img/snacks/${snacks[element]["img"]}" alt="${snacks[element]["alt"]}">
		</div>
		<div class="item__content">
			<div data-title class="item__title">${snacks[element]["title"]}</div>
			<div data-text class="item__text">
				${snacks[element]["text"]}
			</div>
			<div class="item__footer">
				<button data-type="snacks" data-price
					class="item__button button button--buy" data-action="add">${snacks[element]["price"]} сум</button>

				<div class="item__counter">
					<button class="item__control icon-minus" data-action="minus"></button>
					<div class="item__current" data-counter>0</div>
					<button class="item__control icon-plus" data-action="plus"></button>
				</div>
			</div>
		</div>
	</div>
</li>`




	snacksRow.insertAdjacentHTML('beforeEnd', li);
}