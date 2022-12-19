
let container = document.getElementById("greatDilContainer")

//const url =
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
	data.forEach((elem, i) => {


		const card = document.createElement('div');
		const image = document.createElement('img');
		image.setAttribute("src", elem.avatar);
		image.setAttribute("id", "Image");
		const name = document.createElement('h4');
		name.innerText = elem.description;
		name.setAttribute("id", "product");
		card.append(image, name)
		container.append(card)
	})


}




// let nameArr = ["Laptops & Computers TVs & Projectors",
// 	"TVs & Projectors", "Apple", "Video Games, Consoles & VR", "Cell Phones",
// 	"Major Appliances", "Headphones", "PC Gaming",
// 	"Tablets & E-Readers", "Cameras, Camcorders & Drones",
// 	"Cameras, Camcorders & Drones", "Sound Bars, Speakers & Streaming Devices",
// 	"Wearable Technology", "Small Appliances, Floor Care & Home Air Quality",
// 	"Printers, Home Office & Computer Accessories",
// 	"Smart Home, Security & Wi-Fi", "Toys, Games, Collectibles & Movies",
// 	"Electric Transportation", "Health, Fitness & Personal Care"]
// nameData(nameArr)
//let names = []
function nameData(nameData) {
	nameData.forEach((el) => {
		const name = document.createElement('h4');
		name.innerText = el
		//names = el
		//names.push(el)
		card.append(name)
		container.append(card)
	})
}



