function paySuccess() {
	// mock payment feedback
	alert("Payment Successful. Thank you for your purchase!");
}

function addItem() {
	// get add to cart button element from each book page
	let button = document.getElementsByTagName("button")[0];

	button.innerHTML = "<p>Added to Cart</p>";
	button.style.backgroundColor = "green";
	button.style.color = "white";
	button.style.fontAuthorght = "bold";
	button.style.border = "2px solid darkgreen";
}

function proceed() {
	// check if cart is empty before proceeding to payment
}
