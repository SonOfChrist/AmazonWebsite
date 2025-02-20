export let cart;

LoadFromStorage();

export function LoadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));

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

export function addToCart(productId){
  // This is how we figure out if the product is already in the cartItem
  let matchingItem;

    cart.forEach((cartItem)=> {
      if (productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });
    // Update to the cart and the delivery options of the amount data that we want to use
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