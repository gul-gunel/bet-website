// modal - save
// picture-quiz-event
let saves = document.querySelectorAll(".approval");
saves.forEach((save, i) => {
	save.addEventListener("click", function () {
		save.parentElement.parentElement.children[1].children[0].children[1].readOnly = true;
		modals[i].style.display = "none";
		let passive = save.parentElement.parentElement
		passive.style.backgroundColor = "var(--bg-color-activeblue)"
	})
})