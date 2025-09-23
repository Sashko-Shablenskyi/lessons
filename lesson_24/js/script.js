// Строгий режим
"use strict"

// Події
// Синтаксис події
// elem/document.addEventListener("ім'я події", func, options)
// elem/document.addEventListener("ім'я події", ()=>{ code }, options)

// const button = document.querySelector('.button')
// button.addEventListener("click", () => {
// some code
// alert("Click!")

// button.classList.toggle('active')

// const someElement = document.documentElement
// someElement.classList.toggle('active')

// button.style.backgroundColor = "yellow"
// button.style.color = "black"

// button.innerHTML === `hello!` ? button.innerHTML = 'Bye!' : button.innerHTML = `hello!`
// })

// Виклик функції з декількох подій
// const button = document.querySelector('.button')

// Натискання
// button.addEventListener("click", addHtmlClass)
// Наведення миші
// button.addEventListener("mouseenter", addHtmlClass)
// Втрата наведення миші
// button.addEventListener("mouseleave", addHtmlClass)
// Рух миші
// button.addEventListener("mousemove", addHtmlClass)

// function addHtmlClass() {
// 	const someElement = document.documentElement
// 	someElement.classList.toggle('active')
// }

// ....code...
// addHtmlClass()
/*
const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
	button.addEventListener("click", () => {
		const someElement = document.documentElement
		someElement.classList.toggle('active')
	})
})

const page = document.querySelector('.page__container')
page.insertAdjacentHTML("beforeend", `<button type="button" class="button">я нова кнопка</button>`)
*/

// Делегування події
// document.addEventListener("click", documentAction)
// document.addEventListener("mousemove", documentAction)

// function documentAction(e) {
// console.log(e)
// console.log(e.type)
// console.log(e.target)


// if (e.type === "click") {
// ...
// } else if (e.type === "mousemove") {
// ...
// }

// const tag = e.target.tagName;
// if (tag === "BUTTON") {
// 	alert('BUTTON')
// }


// Два кроки
// Крок №1 отримання об'єкту взаєдії
// const targetElement = e.target
// Крок №2 перевірка - чи є об'єкт взаєдії
// тим який нам потрібен

// if (targetElement.closest('.button')) {
// 	const currentElement = targetElement.closest('.button')
// 	changeClass(currentElement)
// 	const tag = currentElement.tagName
// 	if (tag === "A") {
// 		// Відміна дії за замовченням HTML тегу
// 		e.preventDefault()
// 	}
// }


/*
if (targetElement.closest('.parent-block') && e.type === "mousemove") {
	const currentParentElement = targetElement.closest('.parent-block')
	const currentElement = currentParentElement.querySelector('.block')

	const moveX = e.clientX - currentElement.offsetLeft
	const moveY = e.clientY - currentElement.offsetTop

	currentElement.style.cssText = `
		translate: -${moveX / 2}px -${moveY / 2}px;
	`
}*/

// Відміна дії за замовченням HTML тегу
// e.preventDefault()

// }

// function changeClass(element) {
// 	element.classList.toggle('active')
// }

// const page = document.querySelector('.page__container')
// page.insertAdjacentHTML("beforeend", `<button type="button" class="button">я нова кнопка</button>`)
// page.insertAdjacentHTML("beforeend", `<button type="button" class="button">я ще новіша кнопка</button>`)


// Тип події
//console.log(e.type);
// Об'єкт на якому відбулась подія
//console.log(e.target);
// Положення курсора по осі X відносно вікна
//console.log(e.clientX)
// Положення курсора по осі Y відносно вікна
//console.log(e.clientY)
// Положення курсора по осі X відносно документу
//console.log(e.pageX)
// Положення курсора по осі Y відносно документу
//console.log(e.pageY)


// Основні події миші
/*
click, mouseenter, mouseleave, mousemove
*/

// mouseenter - наведення миші
// mouseleave - переведення миші
// mousemove - рух миші


// Scroll
// window.addEventListener("scroll", func)
/*
const block = document.querySelector('.block')
window.addEventListener("scroll", windowScroll)

function windowScroll(e) {
	if (block.getBoundingClientRect().top - window.innerHeight <= 0) {
		console.log('Видно!')
	}

	console.log(window.scrollY)
}
*/
//Intersection Observer API
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API


// const options = {
// 	root: null,
// 	rootMargin: "0px 0px 0px 0px",
// 	// Відсоток від розміру об'єкту.
// 	// При появі якого спрацьовує подія
// 	// Де 0 це будь яка поява
// 	// 1 це повна поява об'кта в в'юпорті
// 	threshold: 0.3,
// }
// const callback = (entries, observer) => {
// 	entries.forEach(entry => {
// 		const currentElement = entry.target
// 		if (entry.isIntersecting) {
// 			currentElement.classList.add('animate')
// 			console.log('я тебе бачу')
// 		} else {
// 			currentElement.classList.remove('animate')
// 			console.log('я тебе не бачу')
// 		}
// 	})
// }
// const observer = new IntersectionObserver(callback, options)

// якщо один об'єкт
// const target = document.querySelector(".block")
// observer.observe(target)

// const animElements = document.querySelectorAll('[class*="--anim"]')
// animElements.forEach(animElement => {
// 	observer.observe(animElement)
// })


// Завантаження
/*
браузер повністю завантажив HTML,
було побудовано DOM-дерево, але зовнішні ресурси,
такі як картинки <img> і стилі,
можуть бути ще не завантажені.
*/
/*
window.addEventListener("DOMContentLoaded ", domLoaded)

function domLoaded(e) {

}
*/

/*
браузер завантажив HTML і зовнішні ресурси
(картини, стилі і т.д.).
*/

// window.addEventListener("load", pageLoaded)

// function pageLoaded(e) {
// 	// ALL CODE
// 	document.documentElement.classList.add('loaded')
// }


// Таймер
// function someFunc() {
// 	console.log('go go go')
// }
// Затримка виконання коду
// setTimeout(() => {
// some code ...
// }, 1000)

// setTimeout(someFunc, 1000)

// Інтервал
// setInterval()
// Зупинка інтервалу
//clearInterval(timer)

// let i = 1
// let timer = setInterval(() => {
// 	console.log(i)
// 	i === 5 ? clearInterval(timer) : ++i
// }, 1000)



// AJAX
// async function getData() {
// 	const response = await fetch("data/info.json", {})
// 	if (response.ok) {
// 		const result = await response.json()
// 		initData(result)
// 	} else {
// 		alert('помилка')
// 	}
// }
// getData()

// function initData(data) {
// 	const page = document.querySelector('.page')
// 	data.users.forEach(item => {
// 		page.insertAdjacentHTML("beforeend", `<p>${item.id}, ${item.name} </p>`)

// 	});
// }

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m

/*
async function getMeteoData() {
	const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&forecast_days=1", {})
	if (response.ok) {
		const result = await response.json()
		initData(result)
	} else {
		alert('помилка')
	}
}
getMeteoData()

function initData(data) {
	console.log(data)
	data.hourly.temperature_2m.forEach(temp => {
		console.log(temp)
	});
}
*/

/*
let scrollAction = (e) => {
	const someBlock = querySelector('.some-block')
	if (window.scrollY >= someBlock.offsetHeight) {
		console.log('Header стікі');
	} else {
		console.log('Header не стікі');
	}
}
*/
// window.addEventListener('scroll', scrollAction)


// =======================дз=======================

// Задача №1
// Дано в html: три елементи з класом item.
// При кліку на кожен з елментів додати клас active,
// при повторному кліку прибрати клас

document.addEventListener('click', docAction)

function docAction(e) {
	addActiverToItem(e)
}

function addActiverToItem(e) {
	const item = e.target

	if (item.classList.contains('list__item')) {
		item.classList.toggle('active')
	}

	// if (item.classList.contains('list__item')) {
	// 	if (item.classList.contains('active')) {
	// 		item.classList.remove('active')
	// 	} else {
	// 		item.classList.add('active')
	// 	}
	// }

	// item.classList.contains('list__item') ? item.classList.contains('active') ? item.classList.remove('active') : item.classList.add('active') : null

}


// Задача №2
// Дано в css/scss: body прозорий
// При повному завантаженню сторінки додати клас до body який прибирає прозорість.
window.addEventListener('load', pageLoaded)

function pageLoaded() {
	document.documentElement.classList.add('loaded')
}


// Задача №3
// Дано в html: header main footer
// Пи наведенні курсору на header змінювати колір фону у footer.
// Коли курсор йде з header повертати початковий фон для footer.

const footer = document.querySelector('.footer')
if (footer) {

}
document.addEventListener('mouseover', documentAction)

function documentAction(e) {
	changeFooterBG(e)
}

function changeFooterBG(e) {
	const target = e.target

	if (target.closest('.header')) {
		footer.classList.add('active')
	} else {
		footer.classList.remove('active')
	}
}

// Задача №4
// Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
// Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
// Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
// Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.

const item = document.querySelector('.item')

if (item) {

	const interval = item.dataset.interval
	const counter = item.dataset.counter
	let intervalName

	function changeContent(counter = 5, interval = 500) {
		let i = 1
		intervalName = setInterval(() => {
			if (i <= counter) {
				item.innerHTML = `<span>${i}</span>`
				i++
			}
		}, interval);
	}

	const options = {
		root: null,
		rootMargin: "0px",
		threshold: 0.5,
	}

	const callback = (entries, observer) => {
		entries.forEach(entry => {
			const currentElement = entry.target
			if (entry.isIntersecting) {
				changeContent(counter, interval)
			} else {
				clearInterval(intervalName)
			}
		})
	}

	const observer = new IntersectionObserver(callback, options)
	observer.observe(item)
}

