
let regdUser = JSON.parse(localStorage.getItem("singUpData"))
console.log(regdUser)
let form = document.getElementById('formTag')
form.addEventListener("submit", (event) => {
	loginFun()
})

function loginFun() {

	event.preventDefault();
	var enterEmail = document.querySelector("#email").value;
	var enterPass = document.querySelector("#password").value;

	var flag = false;
	for (let i = 0; i < regdUser.length; i++) {
		if (regdUser[i].email == enterEmail && regdUser[i].password == enterPass) {


			flag = true;
		}

	}

	if (flag == true) {
		alert("Login Sucess");
		window.location.href = "https://masaischool.com/courses/full-stack-web-dev-full-time/";
	}
	else {
		alert("Login Failed")
	}
}

