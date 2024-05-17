//The reduce() method executes a reducer function for array element.

//The reduce() method returns a single value: the function's accumulated result.

//The reduce() method does not execute the function for empty array elements.

//The reduce() method does not change the original array.

// let numbers = [1,4,6,8];

// // let sum = 0;
// // for(let num of numbers){
// //     sum += num; 
// // }
// // console.log(sum);

// let sum = numbers.reduce((acc, curVal)=> acc+curVal, 0);
// console.log('Sum: '+sum);

//flatten an array
const scores = [[80, 100], [60, 70], [30, 50], [0, 20]];

const allScore = scores.reduce((acc, curVal)=>acc.concat(curVal), []);
// console.log(allScore)

//count occurence

const fruits = ['banana','banana', 'mango', 'apple', 'apple', 'lemon', 'carrot'];
const occurence = fruits.reduce((acc, fruit)=> {
    acc[fruit] = (acc[fruits] || 0) + 1;
    return acc;
}, {});

// console.log(occurence);

const arr = [60, 20, 30, 80, 10]
const max = arr.reduce((acc, num)=> {
    return Math.max(acc,num);
}, []);
console.log(max);