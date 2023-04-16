const numbers = [12, 20, 15, 30, 45, 50, 70, 5, 9, 7];
const bigNumber = numbers.filter(n => n > 20);
const small = numbers.filter(n => n<=20);
console.log(small);
console.log(bigNumber); 

const products = [
    {id:1, name:'laptop', price:25000,},
    {id:2, name:'mobile', price:23000,},
    {id:2, name:'sound-box', price:10000,},
    {id:3, name:'watch', price:15000,},
    {id:4, name:'bike', price:250000,},
];

const product = products.filter(p => p.price > 10000);
console.log(product);