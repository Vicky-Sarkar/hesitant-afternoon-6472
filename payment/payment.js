let checkoutData = JSON.parse(localStorage.getItem("checkout")) || [];

console.log(checkoutData)

let cartTotal = document.getElementById("cart-total");


SaveTotal(checkoutData)
function SaveTotal(datas) {
	let saveTotal = document.getElementById("seveing-total");
	datas.forEach((el) => {

		console.log(el.quantity)
		saveTotal.innerText = Math.floor(el.quantity * 73.00);
	})
}




let checkoutPrice = document.getElementById("total-amount");
let taxTotal = document.getElementById("tax-total");



ReduceAll()

function ReduceAll() {
	let total = checkoutData.reduce((acu, item) => {
		return acu + item.price * item.quantity
	}, 0)
	let t = total;
	cartTotal.innerText = `$${t}`
	let tax = (total * 10) / 100
	taxTotal.innerText = `$${tax}`;

	let taxAndTotal = tax + t;
	checkoutPrice.innerText = `$${taxAndTotal}`

}


let form = document.getElementById("form")

// form.addEventListener("summit", () => {
// 	event.preventDefault()
// 	let image = document.createElement("img")

// 	image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL4dfXddp_iTTm1WqyScoEZiu3mBHle44UzA&usqp=CAU"

// })


function submit() {
	window.location.href = "../payment/done.html"
}


document.querySelector("form").addEventListener("submit", payment)
function payment() {
	event.preventDefault()
	//console.log("hello")
	//    document.querySelector(".webAuthn-btn").alert("Payment Successfull")
	alert("Congratulations! Your order has beed placed")
	document.querySelector("#input-a").value = ""
	document.querySelector("#input-b").value = ""
	document.querySelector("#input-c").value = ""
	document.querySelector("#input-d").value = ""
	document.querySelector("#input-e").value = ""

	window.location.href = "../payment/done.html"

}
