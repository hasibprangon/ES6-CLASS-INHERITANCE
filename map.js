// const nums = [2, 4, 6, 8, 10, 12];
// const output =[];
// for(const num of nums){
//     const doubled = num * 2;
//     output.push(doubled);
// }
// console.log(output);

const nums = [2, 4, 6, 8, 10, 12];

function getDoubles(nums) {
    const output = [];
    for (const num of nums) {
        const doubled =  doubleIt(num);
        output.push(doubled);
    }
    return output;
}

function doubleItOld(number){
    return number*2
}

const doubleIt = number => number*2;

const makeDouble = nums.map(doubleIt);

const double = nums.map(x => x * 2);
// console.log(double);
const fiveTimes = [1,2,3,4,5,6].map(x => x*5);
console.log(fiveTimes)

const result = getDoubles(nums);
console.log(result);
console.log(makeDouble);

/* 
purpose
1. get an array
2. for every elements of the array do double
3. store the result in an array
4. return the result array 
*/