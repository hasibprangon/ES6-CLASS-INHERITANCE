const users = [{id:1, name:'hasib', job:'student'}];

// console.log(users[0].name);

const data = {
    count: 500,
    data: [
        {id: 1, name:'hasib', job:'student'} ,
        {id: 2, name:'prangon', job:'developer'} 
    ]
}
const first_job = data.data[0].job;
// console.log(first_job);

const human = {
    id : 1938320105,
    name:'Md. Hasibul Hossain Prangon',
    address:{
        street:{
            first: 'Bus stand road',
            second:'Bujruk Mirjapur',
            third:'Rice mill'
        },
        postOffice:'janipur',
        city:'Kushtia'
    }
}
const user = human.address.street.third
// optional chaining
const userss = human.address.stret?.third
console.log(userss);