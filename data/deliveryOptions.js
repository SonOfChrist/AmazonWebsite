// This file contains the delivery options available for products in the store.
// Each delivery option has an ID, delivery days, and price in cents.
export const deliveryOptions = [{
    id: '1',
    deliveryDays: 7,
    priceCents:0
}, {
    id: '2',
    deliveryDays: 3,
    priceCents:499
}, {
    id: '3',
    deliveryDays: 1,
    priceCents:999
}];

// This function retrieves a delivery option by its ID.
// If the ID does not match any delivery option, it returns the first option by default.
export function getDeliveryOption(deliveryOptionId) {
    let deliveryOption;

      deliveryOptions.forEach((option) => {
        if (option.id === deliveryOptionId) {
          deliveryOption = option;
        }
      });

      return deliveryOption || deliveryOptions[0];
};