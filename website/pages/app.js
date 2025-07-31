// remember to allow `script` for `file:///` in NoScript extension

// show number of cart items in navbar next to CART

function paySuccess() {
	// mock payment feedback
	alert("Payment Successful. Thank you for your purchase!");
}

function addItem() {
	// get add to cart button element from each book page
	let buyBox = document.getElementById("buy");
	let button = buyBox.getElementsByTagName("button")[0];

	// give feedback on button click
	button.innerHTML = "<p>Added to Cart</p>";
	button.style.backgroundColor = "green";
	button.style.color = "white";
	button.style.fontAuthorght = "bold";
	button.style.border = "2px solid darkgreen";

	// add book cover, title, price, and quantity (default: 1) to localstorage to display in cart
}

function proceed() {
	// check if cart is empty before proceeding to payment
}
