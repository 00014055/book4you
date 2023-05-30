accordion = document.querySelector(".accordion").querySelectorAll(".accordion__item");
console.log(accordion);

accordion.forEach(element => {
	element.addEventListener("click", function(){
		accordion.forEach(dev=>dev.classList.remove("active"))

		this.classList.add("active");
	})
});