const products = Array.from(document.querySelectorAll('.product'));
const cartProducts = document.querySelector('.cart__products');

function updateQuantity(quantityEl, delta) {
  const next = parseInt(quantityEl.textContent) + delta;
  if (next >= 1) {
    quantityEl.textContent = next;
  }
}

function createCartItem(productId, imageSrc, quantity) {
  const cartItem = document.createElement('div');
  cartItem.classList.add('cart__product');
  cartItem.dataset.id = productId;

  const img = document.createElement('img');
  img.classList.add('cart__product-image');
  img.src = imageSrc;

  const count = document.createElement('div');
  count.classList.add('cart__product-count');
  count.textContent = quantity;

  cartItem.appendChild(img);
  cartItem.appendChild(count);

  return cartItem;
}

function addToCart(product) {
  const productId = product.dataset.id;
  const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);
  const imageSrc = product.querySelector('.product__image').src;
  const existingItem = cartProducts.querySelector('[data-id="' + productId + '"]');

  if (existingItem) {
    const countEl = existingItem.querySelector('.cart__product-count');
    countEl.textContent = parseInt(countEl.textContent) + quantity;
    return;
  }

  cartProducts.appendChild(createCartItem(productId, imageSrc, quantity));
}

products.forEach(function (product) {
  const decButton = product.querySelector('.product__quantity-control_dec');
  const incButton = product.querySelector('.product__quantity-control_inc');
  const quantityEl = product.querySelector('.product__quantity-value');
  const addButton = product.querySelector('.product__add');

  decButton.addEventListener('click', function () {
    updateQuantity(quantityEl, -1);
  });

  incButton.addEventListener('click', function () {
    updateQuantity(quantityEl, 1);
  });

  addButton.addEventListener('click', function () {
    addToCart(product);
  });
});
