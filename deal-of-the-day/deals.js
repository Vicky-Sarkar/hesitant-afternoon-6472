
let hourHeading = document.getElementById("hour");
let minHeading = document.getElementById("minute");
let secHeading = document.getElementById("second");


let hour = 0;
let minute = 0;
let seconds = 0;

setInterval(() => {
	secHeading.innerText = seconds.toString().padStart(2, '0');
	seconds++;
	if (seconds == 60) {
		setTimeout(() => {
			minHeading.innerText = minute.toString().padStart(2, '0');
		}, 900)

		minute++
		seconds = 0;
	}
	if (minute == 60) {
		hourHeading.innerText = hour.toString().padStart(2, '0');
		hour++;
		minute = 0;
	}
	if (hour == 24) {
		hour = 0;
	}
}, 1000);



let checkoutData = JSON.parse(localStorage.getItem("checkout")) || [];


let carttotal = document.getElementById("cart-item")
carttotal.innerText = checkoutData.length;


const container = document.getElementById("Bonus-Deals")

getData()





async function getData() {
	try {
		let res = await fetch(`https://639adc3931877e43d678de83.mockapi.io/data`)

		let dispalyData = await res.json()
		displayData(dispalyData)

	} catch (error) {
		console.log(error)
	}
}






function displayData(data) {
	container.innerHTML = null;
	data.forEach((elem, i) => {

		console.log(elem.nameArr)
		const card = document.createElement('div');

		const image = document.createElement('img');
		image.setAttribute("src", elem.avatar);
		image.setAttribute("id", "Image");

		const price = document.createElement('h3');
		price.innerText = `$${Math.floor(elem.price * 5)}`;
		price.setAttribute("id", "prices")
		const description = document.createElement('p');
		description.innerText = elem.description;
		description.setAttribute("id", "descriptions")
		const save = document.createElement('h5');
		save.innerText = `Save $ ${Math.floor(Math.random() * 100)}`;
		save.setAttribute("id", "saves");
		save.style.textDecorationLine = "none"
		const buttons = document.createElement('button');
		buttons.setAttribute("id", "add-to-cart");
		buttons.innerText = "Add to Cart";
		buttons.addEventListener("click", () => {

			flag = false;
			for (let i = 0; i < checkoutData.length; i++) {
				if (checkoutData[i].id === elem.id) {
					flag = true;
					break;
				}
			}


			if (flag == true) {
				alert(" Already Added to Cart");
			} else {
				checkoutData.push({ ...elem, quantity: 1 })
				localStorage.setItem("checkout", JSON.stringify(checkoutData));
				alert("Added to Cart");
			}



		})

		card.append(image, description, price, save, buttons);
		container.append(card);
	})


}













