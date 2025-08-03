// remember to allow `script` for `file:///` in NoScript extension

function addItem(event) { // add item to cart; triggered by submit button on every book page
	event.preventDefault(); // prevent form submit from refreshing page

	// get book cover, title, price, and quantity (default: 1) to store in JSON for retrieving and displaying in cart page later
	const buyBox = document.getElementById("buy");
	const bookTitle = document.getElementsByTagName("h1")[0].innerText;
	const bookCover = document.getElementsByTagName("img")[0].src;
	const bookPrice = buyBox.getElementsByTagName("p")[0].innerText.substring(7); // get $XX.XX substring
	const bookQty = 1;
	const bookUrl = location.href; // get url of book page

	// using JSON instead of localStorage or cookies because of browser restrictions on `file:///`
	// think of it as an 'intended feature' where the user can have multiple carts
	const buyForm = document.getElementById("buyForm");
	const fileInput = buyForm.elements["json"];
	const file = fileInput.files[0];

	if(!file) { // show error and stop if no file
		alert("ERROR: No file selected");
		return;
	}

	const jsonReader = new FileReader();

	jsonReader.onload = (jsonEvent) => { // triggers from `jsonReader.readAsText(file);`
		let jsonData = [];

		try {
			// load json data if not null; create array if null
			jsonData = JSON.parse(jsonEvent.target.result || "[]");
		} catch(error) {
			alert("ERROR: File is not JSON.\n" + error.name + ".\n" + error.message);
			return;
		}

		if(!Array.isArray(jsonData)) {
			alert("ERROR: JSON data is not an array");
			return;
		}

		for(let book of jsonData) { // check for duplicate entries
			if(bookTitle == book["title"]) {
				alert(bookTitle + " is already in the cart\nAdjust quantity in the cart page");
				return;
			}
		}

		// add data to array
		jsonData.push({"title": bookTitle, "img": bookCover, "price": bookPrice, "qty": bookQty, "url": bookUrl});

		// convert to string (pretty printing) to be stored in blob json file
		const jsonString = JSON.stringify(jsonData, null, 2);

		// create blob with updated JSON data for user to download and replace/overwrite
		// not user-friendly but its to work around not being able to directly modify JSON files from filesystem
		const jsonBlob = new Blob([jsonString], {type: "application/json"});
		const jsonUrl = URL.createObjectURL(jsonBlob);
		
		// create temporary file download link
		const jsonDownload = document.createElement("a");
		jsonDownload.style.display = "none"; // dont show element
		jsonDownload.href = jsonUrl; // link to blob
		jsonDownload.download = "cart.json"; // set default filename

		// add element to DOM temporarily
		document.body.appendChild(jsonDownload);

		// simulate click for auto prompt
		jsonDownload.click();
		
		// clean up
		document.body.removeChild(jsonDownload); // remove element from DOM
		URL.revokeObjectURL(jsonUrl); // clear blob URL; free memory
	};

	jsonReader.readAsText(file); // triggers the above code

	// give visual feedback on successful function call
	const button = buyForm.elements["submit"];
	button.value = "Added to Cart";
	button.style.backgroundColor = "green";
	button.style.color = "white";
	button.style.fontAuthorght = "bold";
	button.style.border = "2px solid darkgreen";
	button.style.borderRadius = "4px";
}
