const number = [3, 4, 5, 6];
const half = number.map(x => x/2);
// console.log(half);

 const friends = ['Hasibul Hossain', 'Asad', 'Sabbir', 'Imran', 'Babul'];
 const firstLetter = friends.map(f => f[0]);
 const nameLenghts = friends.map(f => f.length);
//  console.log(nameLenghts);
//  console.log(firstLetter);

const product = [
    {id:1, name:'laptop', price:25000,},
    {id:2, name:'mobile', price:23000,},
    {id:3, name:'watch', price:15000,},
    {id:4, name:'bike', price:250000,},
];
// const items = product.map(p => console.log(p.name));

const items = product.map(p => p.name);
console.log(items);