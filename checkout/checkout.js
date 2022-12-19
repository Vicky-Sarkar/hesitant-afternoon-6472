
let container = document.getElementById("checkout-Deals")


let checkoutData = JSON.parse(localStorage.getItem("checkout")) || [];


let carttotal = document.getElementById("cart-item")
carttotal.innerText = checkoutData.length;
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




displayData(checkoutData)


//const url =
//getData()


function displayData(data) {
	container.innerHTML = null;
	data.forEach((elem, i) => {

		const card = document.createElement('div');
		card.setAttribute("id", "cards")
		const image = document.createElement('img');
		image.setAttribute("src", elem.avatar);
		image.setAttribute("id", "Image");

		const price = document.createElement('h3');
		price.innerText = `$${Math.floor(elem.price * elem.quantity)} `;
		price.setAttribute("id", "prices")
		const description = document.createElement('p');
		description.innerText = elem.description;
		description.setAttribute("id", "descriptions")
		const save = document.createElement('h5');


		save.innerText = `Save $ ${Math.floor(elem.quantity * 73.00)} `;

		save.setAttribute("id", "saves");

		const buttons = document.createElement('button');
		buttons.setAttribute("id", "remove-product");
		buttons.innerText = "Remove";
		buttons.addEventListener("click", () => {


			checkoutData = checkoutData.filter((el, index) => {
				return index != i;
			})

			localStorage.setItem("checkout", JSON.stringify(checkoutData));
			let removeData = JSON.parse(localStorage.getItem("remove-items")) || [];
			removeData.push(elem)
			localStorage.setItem("remove-items", JSON.stringify(removeData));
			displayData(checkoutData)
		})




		let increase = document.createElement('button');
		increase.setAttribute("id", "increase")
		increase.innerText = " + ";
		increase.addEventListener("click", () => {
			increaseQuant(elem, i)
		})


		let span = document.createElement('span');
		span.innerText = elem.quantity;
		console.log(elem.quantity)
		let decreased = document.createElement('button');
		decreased.setAttribute("id", "decreased")
		decreased.innerText = "-";
		decreased.addEventListener("click", () => {
			decreasedQuant(elem, i)
		})

















		card.append(image, description, price, save, buttons, increase, span, decreased);
		container.append(card);
	})


}






function increaseQuant(element, i) {
	checkoutData[i].quantity++
	console.log(checkoutData)
	localStorage.setItem("checkout", JSON.stringify(checkoutData));
	ReduceAll()
	displayData(checkoutData)
}

function decreasedQuant(element, i) {
	checkoutData[i].quantity--
	console.log(checkoutData)
	localStorage.setItem("checkout", JSON.stringify(checkoutData));
	ReduceAll()
	displayData(checkoutData)
}







