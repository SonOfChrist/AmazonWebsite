import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts} from "../data/products.js";
//import '../data/backend-practice.js'
//import '../data/cart-class.js'
//import '../data/cart-oop.js'

new Promise((resolve) => {
    loadProducts(() => {
        resolve();
    });
}).then(() => {
     renderOrderSummary();
     renderPaymentSummary();
});


/*
promise.all([
    loadProductsFetch(),
    newPromise((resolve) => {
        loadCart(() =>{
            resolve(value2)
        });
    });
]).then((values) => {
    console.log(values)
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
loadProducts(()=> {
    loadCart(()=> {
        renderOrderSummary();
        renderPaymentSummary();
    });
});
*/

/*
async function loadPage() {
    try {
        //throw 'error 1'
        await loadProductsFetch();
        
        const value await new Promise((resolve, reject) => {
            //throw 'error2'
            loadCart(() => {
                reject('error 3')
                resolve('value 3')
            })
        })
    }
} catch (error) {
    console.log('Unexpected error. Please try again later.')
}
    renderOrderSummary();
    renderPaymentSummary();
*/