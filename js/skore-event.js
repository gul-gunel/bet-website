// modal - save
// skore-event
let saves = document.querySelectorAll(".approval");
saves.forEach((save, i) => {
	save.addEventListener("click", function () {
		let dels = save.parentElement.parentElement.children[2].children[1].children
		dels[0].children[0].readOnly = true;
		dels[2].children[0].readOnly = true;
		modals[i].style.display = "none";
		let passive = save.parentElement.parentElement
		passive.style.backgroundColor = "var(--bg-color-activeblue)"
	})
})