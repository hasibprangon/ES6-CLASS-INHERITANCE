const numbers = [12, 20, 15, 30, 45, 50, 70, 5, 9, 7];

const fives = numbers.find(n => n % 5 === 0);
const fivesAll = numbers.filter(n => n % 5 === 0);
console.log(fivesAll);
console.log(fives);

const products = [
    { id: 1, name: 'laptop', price: 25000, },
    { id: 2, name: 'mobile', price: 23000, },
    { id: 2, name: 'sound-box', price: 10000, },
    { id: 3, name: 'watch', price: 15000, },
    { id: 4, name: 'bike', price: 250000, },
];

const price = products.find(p => p.price > 25000);
console.log(price);