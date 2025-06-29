// Cart Object in OOP Style Organizing the Cart functionality in an Object-Oriented Programming (OOP) style.
// Function to Genarate Object in the OOP 
// Tries to respresent the real world
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

    //
    addToCart(productId){
    let matchingItem;

        this.cartItems.forEach((cartItem)=> {
            if (productId === cartItem.productId){
                matchingItem = cartItem;
            }
        });
        
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

    //
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
