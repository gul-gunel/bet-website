let inputs = document.querySelectorAll(".guess");

inputs.forEach((input, i) => {
	input.addEventListener("click", function(){

		let children = input.parentElement.children;
		for(let i = 0; i < children.length; i++){
			children[i].classList.remove("light--green")
		}

		input.classList.toggle("light--green");
	})
})