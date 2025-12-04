# Reference List
- File located in `./references/References.pdf`

# Pages

## Homepage
- `./website/pages/index.html`

## Books
- Book pages located under `./website/pages/books` folder

## About
- `./website/pages/about.html`

## Cart
- `./website/pages/cart.html`

## Payment
- `./website/pages/pay.html`

# Media
- Under `./website/media` folder

# Why JSON?
- Pages are loaded from filesystem, so `localStorage` is separated per file instead of per domain
- This means that there cannot be a 'global' cart storage storing book data that `cart.html` can access book data from
- JSON files can be saved by the user and loaded from their filesystem, so it is used as a workaround
- Maybe `localStorage` would have worked if the pages were hosted on Github Pages, but that does not fit the assignment submission format
