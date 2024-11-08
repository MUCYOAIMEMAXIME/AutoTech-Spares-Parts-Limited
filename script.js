// Function to parse URL parameters
function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split('&');
    pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(value.replace(/\+/g, ' '));
    });
    return params;
}

// Function to set product details
function setProductDetails(name, price, imageSrc) {
    document.getElementById('product-name').textContent = name;
    document.getElementById('product-price').textContent = `Price: ${price}`;
    document.getElementById('selected-product-image').src = imageSrc;
}

// Function to confirm purchase
function confirmPurchase() {
    const productName = document.getElementById('product-name').textContent;
    const productPrice = document.getElementById('product-price').textContent;
    const quantity = document.getElementById('quantity').value;

    alert(`You are buying ${quantity} unit(s) of ${productName} for ${productPrice} each.`);
}

// Get query parameters and set product details
const params = getQueryParams();
setProductDetails(params.name, params.price, params.image);
