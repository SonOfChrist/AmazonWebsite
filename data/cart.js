// This module manages the shopping cart functionality, including adding, removing, and updating items in the cart.
export let cart;

LoadFromStorage();

// It also handles saving the cart to localStorage for persistence across page reloads.
// It initializes the cart from localStorage or sets a default cart if none exists.
export function LoadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));

  // If cart is null or undefined, set a default cart, this is useful for testing or if the cart is empty
  if (!cart){
    cart = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '1'
      }];
  };
};

function savetoStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
};

// This function adds a product to the cart, or increases the quantity if it already exists
// It also saves the cart to localStorage
export function addToCart(productId){
  
  let matchingItem;

    cart.forEach((cartItem)=> {
      if (productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        quantity: 1,
        deliveryOptionId: '1'
      });
    }
    savetoStorage()
};

// This function removes a product from the cart by its productId
export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if(cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;

  savetoStorage();
};

// This function updates the delivery option for a product in the cart
export function updateDeliveryOption(productId, deliveryOptionId) {
   let matchingItem;

    cart.forEach((cartItem)=> {
      if (productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;
    
    savetoStorage();
};