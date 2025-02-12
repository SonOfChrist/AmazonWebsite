function Cart(localStorageKey) { 
    const cart = {
    cartItems: undefined,

        LoadFromStorage() {
        this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

        if (!this.cartItems){
            this.cartItems = [{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
                deliveryOptionId: '1'
            }, {
                productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1,
                deliveryOptionId: '1'
            }];
        }
    },
    savetoStorage() {
        localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
    },

    addToCart(productId){
    // This is how we figure out if the product is already in the cartItem
    let matchingItem;

        this.cartItems.forEach((cartItem)=> {
            if (productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });
        // Update to the cart and the delivery options of the amount data that we want to use
        if (matchingItem) {
        matchingItem.quantity += 1;
        } else {
            this.cartItems.push({
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
            });
        }
        this.savetoStorage()
    },

    removeFromCart(productId) {
        const newCart = [];

        this.cartItems.forEach((cartItem) => {
            if(cartItem.productId !== productId) {
            newCart.push(cartItem);
            }
        });
    
    this.cartItems = newCart;

    this.savetoStorage();
    },

    updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

        this.cartItems.forEach((cartItem)=> {
        if (productId === cartItem.productId){
            matchingItem = cartItem;
        }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;
        
        this.savetoStorage();
        }
    };
    return cart
};

const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.LoadFromStorage();

businessCart.LoadFromStorage();

console.log(cart)
console.log(businessCart)

