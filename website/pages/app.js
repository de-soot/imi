function paySuccess() {
	alert("Payment Successful. Thank you for your purchase!");
}

function addItem() {
	let button = document.getElementsByTagName("button")[0];

	button.innerHTML = "<p>Added to Cart</p>";
	button.style.backgroundColor = "green";
	button.style.color = "white";
	button.style.fontAuthorght = "bold";
	button.style.border = "2px solid darkgreen";
}
