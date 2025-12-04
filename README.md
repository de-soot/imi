# Why Use JSON I/O for Cart Data Instead of localStorage?
- Pages are loaded from filesystem, so `localStorage` is separated per file instead of per domain (different if this was hosted on a proper website)
- This means that there cannot be a 'global' cart storage storing book data that `cart.html` can access book data from
- JSON files can be saved by the user and loaded from their filesystem, so it is used as a workaround
- Maybe `localStorage` would have worked if the pages were hosted on Github Pages, but that did not fit the assignment submission format criteria

# Reference List
- File located in `./references`

# Main Pages

## Homepage
- `./website/pages/index.html`

## Books
- Individual book HTML pages are located under `./website/pages/books` folder

## About
- `./website/pages/about.html`

## Cart
- `./website/pages/cart.html`

## Payment
- `./website/pages/pay.html`

# Media Used by Pages
- Under `./website/media` folder
