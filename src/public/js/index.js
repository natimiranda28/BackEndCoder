const socket = io()
const main = document.getElementById('list-products')

socket.on('init-products', ({ products }) => {
	console.log(products)
	main.innerHTML = ''
	products.forEach((product) => {
		main.innerHTML += 
		`<div>
		  <h2>${product.title}</h2>
		  <h5> $${product.price}</h5>
		  <p>${product.description}</p>
	  	</div>`
	})
})

socket.on('add-product', (newProduct) => {
	main.innerHTML += 
	`<div>
		  <h2>${newProduct.title}</h2>
		  <h5> $${newProduct.price}</h5>
		  <p>${newProduct.description}</p>
	</div>`
})

socket.on('delete-product', (toDeleteProduct) => {
	document.getElementById(toDeleteProduct.id).innerHTML="";
})