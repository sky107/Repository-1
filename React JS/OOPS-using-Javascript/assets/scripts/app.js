// // RAW VERSION WITHOUT OOPS NOW HERE WE HAVE TO MANUALLY ADD WHICH CAN CAUSE TYPO

// const productList = {
// 	products: [{
// 		title: 'A Cake',
// 		imageURL: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80',
// 		price: 299.11,
// 		description: 'Best in class'
// 	}, {
// 		title: 'Cup of Tea',
// 		imageURL: 'https://images.unsplash.com/photo-1575126989651-2d4a29211c09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
// 		price: 89.11,
// 		description: 'Extra Ginger'
// 	}],
// 	render() {
// 		const renderHook = document.getElementById('app');
// 		const prodList = document.createElement('ul');
// 		prodList.className = 'product-list';
// 		for (const prod of this.products) {
// 			const prodEl = document.createElement('li');
// 			prodEl.className = 'product-item';
// 			prodEl.innerHTML = `
// 			<div>
// 			<img src="${prod.imageURL}" alt="${prod.title}" >
// 			<div class="product-item-content">
// 			<h2>${prod.title}</h2>
// 			<h3>\$ ${prod.price}</h3>	
// 			<p>${prod.description}</p>
// 			<button>Add to Card</button>
// 			</div>
// 			</div>
// 			`;
// 			prodList.append(prodEl);
// 		}
// 		renderHook.append(prodList);
// 	}
// }

// productList.render();



// // This class is for Data Container
class Product {
	title = 'Default';
	imageURL;
	description; // this is field
	price;

	// adding a method
	// someName(){}
	constructor(title, image, desc, price) {
		this.title = title; // this is property
		this.imageURL = image,
			this.description = desc,
			this.price = price
	}


}


class ShoppingCart {
	items=[]
	 render(){
	 	const cartEl=document.createElement('section');
	 	cartEl.innerHTML=`
	 	<h2>Total amount</h2>
	 	<button>Order Now</button>`
	 	cartEl.className='cart';
	 	return cartEl;
	 }
}



class ProductItem {

	constructor(product) {
		this.product = product;
	}

	addToCart() {
		// Now as pre JS Behaviour this will refer to button as this funciton is called 
		// but binding will make this work so add this.addToCart.bind(this) in line above returning prodEl
		console.log(this.product);
		console.log("ADDING TO CART");
	}
	// accepte a dom as arguent/ return 
	render() {
		const prodEl = document.createElement('li');
		prodEl.className = 'product-item';
		prodEl.innerHTML = `
			<div>
			<img src="${this.product.imageURL}" alt="${this.product.title}" >
			<div class="product-item-content">
			<h2>${this.product.title}</h2>
			<h3>\$ ${this.product.price}</h3>	
			<p>${this.product.description}</p>
			<button>Add to Card</button>
			</div>
			// </div>
			`;

		const addCartButton = prodEl.querySelector('button');
		// query selector will pickup the first with button tag , as we are refering to this section

		addCartButton.addEventListener('click', this.addToCart.bind(this))
		return prodEl;
	}
}
// // order of class does not matter js compiler and arranges auto

// // This is where logic resides
// // Name always starts with Capital letter

class ProductList {
	products = [
		new Product('A Pillow', 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&w=1000&q=80', 'test dsec', 12.22),
		new Product('A carpet', 'https://images.unsplash.com/photo-1575126989651-2d4a29211c09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80', 'test desc', 23.3)
	];


	constructor() {}



	render() {
		const renderHook = document.getElementById('app');
		const prodList = document.createElement('ul');
		prodList.className = 'product-list';

		for (const prod of this.products) {
			console.log(prod);
			const productItem = new ProductItem(prod);
			prodList.append(productItem.render());
		}
		renderHook.append(prodList);
	}
}





class Shop{
	render(){
		const cart=new ShoppingCart();
		const cartEl=cart.render();

		const productList = new ProductList();
		productList.render();
	}
}

const shop=new Shop();
shop.render();

// class App{
// 	static init(){
// 		const shop=new Shop();
// 		shop.render();
// 	}
// }

// App.init();