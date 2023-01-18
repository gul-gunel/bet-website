// navigation-tab
let tabs = document.querySelectorAll(".nav__link");
let contents = document.querySelectorAll(".content__inner__item");

tabs.forEach((tab, index) => {
	tab.addEventListener("click", () => {
		contents.forEach((content) => {
			content.classList.remove("active");
		});
		tabs.forEach((tab) => {
			tab.classList.remove("active");
		});
		contents[index].classList.add("active");
		tabs[index].classList.add("active");
	});
});


// -----------------------------------------------------------------------------------


// Etkinlikler & Giriş 
let opens = document.querySelectorAll("body > div > div.buttons > button");
let closes = document.querySelectorAll(".btn__close");

let sidebar__left = document.querySelector(".sidebar__left");
let sidebar__right = document.querySelector(".sidebar__right");

let content__inner = document.querySelector(".content__inner");

// open
opens.forEach((open, i) => {
	open.addEventListener("click", function () {
		if (i == 0) {
			sidebar__left.classList.toggle("left");
			content__inner.classList.add("blur");
		} else {
			sidebar__right.classList.toggle("right")
			content__inner.classList.add("blur");
		}
	})

})
// close
closes.forEach((close, i) => {
	close.addEventListener("click", function () {
		if (i == 0) {
			sidebar__left.classList.toggle("left");
			content__inner.classList.remove("blur");
		} else {
			sidebar__right.classList.toggle("right")
			content__inner.classList.remove("blur");
		}
	})

})

content__inner.addEventListener("click", function () {
	sidebar__left.classList.remove("left");
	sidebar__right.classList.remove("right");
	content__inner.classList.remove("blur")
})



// -----------------------------------------------------------------------------------


// modal
let modals = document.querySelectorAll(".modal");
let guesses = document.querySelectorAll(".mdl");
let cancels = document.querySelectorAll(".btn--red");
// open
guesses.forEach((guess, i) => {
	guess.addEventListener("click", function () {
		modals[i].style.display = "block";
	})

})
// close
cancels.forEach((cancel, i) => {
	cancel.addEventListener("click", function () {
		modals[i].style.display = "none";
	})
})
// save alanı html içerisinde yapılmıştır.






