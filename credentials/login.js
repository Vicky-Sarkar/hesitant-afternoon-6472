//let singUp = JSON.parse(localStorage.getItem("singUpData")) || []
let regdUser = JSON.parse(localStorage.getItem("singUpData")) || []
console.log(regdUser)
let loginData = JSON.parse(localStorage.getItem("login")) || []
let formTag = document.getElementById("formTag")

formTag.addEventListener("submit", (event) => {
	loginFun()
})


function myFunction() {
	let x = document.getElementById("password")
	if (x.type === "password") {
		x.type = "text"
	} else {
		x.type = "password"
	}
}


let logout = document.getElementById("logout")
logout.addEventListener("submit", () => {
	localStorage.setItem("loginData", JSON.stringify(loginDataa))
})





function loginFun() {

	event.preventDefault();
	// var enterEmail = document.querySelector("#email").value;
	// var enterPass = document.querySelector("#pass").value;
	let loginObj = {
		enterEmail: formTag.email.value,
		enterPass: formTag.password.value
	}
	loginData.push(loginObj)


	console.log(loginObj.enterPass === regdUser.password)
	let flag = false;
	for (let i = 0; i < regdUser.length; i++) {
		if (regdUser[i].email === loginObj.enterEmail && regdUser[i].password === loginObj.enterPass) {


			flag = true;
		}

	}
	if (flag == true) {
		alert("Login Sucess");
		window.location.href = "https://masaischool.com/courses/full-stack-web-dev-full-time/";
		localStorage.setItem("login", JSON.stringify(loginData))
	}
	else {
		alert("Login Failed")
	}
}