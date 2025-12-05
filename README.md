# Mock Bookstore Web App
Mock web application made with plain HTML/CSS/JS for a course assignment.

## Why Use JSON I/O for Cart Data Instead of localStorage?
- Pages are loaded from filesystem, so `localStorage` is separated per file instead of per domain (different if this was hosted on a proper website)
- This means that there cannot be a 'global' cart storage storing book data that `cart.html` can access book data from
- JSON files can be saved by the user and loaded from their filesystem, so it is used as a workaround
- Maybe `localStorage` would have worked if the pages were hosted on Github Pages, but that did not fit the assignment submission format criteria

## Main Pages

### Homepage
- `./website/pages/index.html`

### Books
- Individual book HTML pages are located under `./website/pages/books` folder
- Find where book data was sourced from in [Reference List](#reflist)

### About
- An imaginary company's about page
- `./website/pages/about.html`

### Cart
- Loads cart data from JSON file that user inputs
- `./website/pages/cart.html`

### Payment
- Does not actually work; it is a mock-up
- `./website/pages/pay.html`

## Media Used
- Under `./website/media` folder

## Reference List<a name="reflist"></a>
- File located in `./references`
