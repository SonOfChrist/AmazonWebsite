import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
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