let singUp = JSON.parse(localStorage.getItem("singUpData")) || []

console.log(singUp)




SingUpFrom(singUp)
function SingUpFrom(data) {


	let emaildetails = document.getElementById("email-details")
	data.forEach((elm) => {
		emaildetails.innerText = elm.email;

	})
}


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




