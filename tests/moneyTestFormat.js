import { formatCurrency } from "../Scripts/utils/money.js";

console.log('test suite: formatCurrency')

console.log('Converts cents into dollars')

if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('Failed');
};

if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('Failed');
};

if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log('Failed');
};

console.log('rounds up to the nearest cent')

if (formatCurrency(2000.4) === '20.00') {
    console.log('passed');
} else {
    console.log('Failed');
};