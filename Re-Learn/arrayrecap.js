// const carts = ['mango', 'fanta', 'bread', 'oranges', 'eggs']
// //lengths
// let len = carts.length
// // console.log(len);

// // //access the elements of an array
// // let first = carts[0];
// // console.log(first)
// // let last = carts[carts.length -1];
// // console.log(last);

// // for (let  items of carts) {
// //     console.log(items)
// // }

// // console.log('*******************')
// // carts.forEach((index, carts)=>console.log(index+':'+carts));
// // console.log('************************');
// // for(let i=0; i<carts.length; i++){
// //     console.log(carts[i]);
// // }

// //remove last element
// //let removeLast = carts.pop();
// // console.log(removeLast);

// // let firstRemoved = carts.shift();
// // console.log(carts);

// //add to end of array
// // carts.push('Avocado');
// // console.log(carts);

// //add to the beginning of the array
// // carts.unshift('watermelon');
// // console.log(carts);

// //check if an array includes an item
// let isMango = carts.includes('mango')
// console.log(isMango);

// let itemIndex = carts.indexOf('coke')
// console.log(itemIndex);

// //joining two arrays together
// let arr2 = carts.slice(carts.length -3)
// console.log(arr2);

// //converting an array to a string
// let newCart = carts.toString();
// console.log(newCart);
// console.log(typeof(newCart));

// let convertArrStr = newCart.split(',');
// console.log(convertArrStr);

// function moveZero(arr){
//     let nonZeroIndex = 0;

//     for(let i=0; i<arr.length; i++){
//         if(arr[i] !== 0){
//             [arr[nonZeroIndex], arr[i]] = [arr[i], arr[nonZeroIndex]];
//             nonZeroIndex++;
//         }
//     }
//     return arr
// }

// console.log(moveZero([0,2,0,3]));

// function checkPalidrone(str) {
//     let string = ""

//     for (let i = str.length; i >= 0; i--) {
//          string += str[i]
//     }

//     if (string !== str) {
//         return false;
//     }
//     else {
//         return true;
//     }
// }

// let str="popp"
// console.log(checkPalidrone(str));

function isPalindrome(str){
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome('popp'));

const isPalindrome = (str) => str.split('').reverse().join('')
console.log(isPalindrome('look'))