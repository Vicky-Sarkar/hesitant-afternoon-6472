let form = document.getElementById('form');
let singUp = JSON.parse(localStorage.getItem("singUpData")) || []

function myFunction() {
	let x = document.getElementById("password")
	if (x.type === "password") {
		x.type = "text"
	} else {
		x.type = "password"
	}
}

form.addEventListener("submit", (event) => {
	SingUpFrom()
})
function SingUpFrom() {
	event.preventDefault()
	let data = {
		name: form.name.value,
		lastName: form.lastName.value,
		email: form.email.value,
		password: form.password.value,
		conPasword: form.conPassword.value,
		mobile: form.mobile.value
	}





	if (data.name === "" && data.lastName === "" && data.email === "" && data.password === "" && data.conPasword === "" && data.mobile === "") {
		alert("Enter the user details")
	} else {
		singUp.push(data)
		localStorage.setItem("singUpData", JSON.stringify(singUp))
		alert("Acount created successfully!")
	}

}