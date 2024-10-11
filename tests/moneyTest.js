import { formatPrice } from "../Scripts/utils/money.js";

if (formatPrice(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('Failed');
}

if (formatPrice(0) === '0.00') {
    console.log('passed');
} else {
    console.log('Failed');
}


if (formatPrice(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log('Failed');
}