let form = document.getElementById('form');
let singUpData = JSON.parse(localStorage.getItem("singUpData")) || []
console.log(singUpData)
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
	console.log(singUpData)
	singUpData.push(data)
	localStorage.setItem("singUpData", JSON.stringify(singUpData))
	alert("Acount created successfull!")
}