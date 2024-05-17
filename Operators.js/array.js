const students = ["Chioma", "Chidera", "Elisha", "Daniel", "Bunmi", "Prince"];
//access
let first = students[0];
let len = students.length;
let last = students[students.length - 1];
// console.log(last);
// add to end of array

// students.push("Michael");
// // remove/delete last item from end of array
// let removeItem = students.pop();
// console.log(removeItem);
// // add item to beginning of array
// students.unshift("Korede");
// // remove first item from array
// students.shift();
// // add or remove from middle
// students.splice(1,1);
// students.splice(1, 0,"David");

// let fewItems = students.slice(1,2);
// console.log(fewItems);

//check indexof
// let chiomaIndex = students.indexOf("Daniel")
// console.log(chiomaIndex);

function removeDuplicate(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        let item = array[i];

        if (newArray.indexOf(item)===-1) {
            newArray.push(item);
        }
    }
    return newArray;
}

// const result = removeDuplicate([1, 3, 6, 3, 8, 6, 2, 4, 6, 7])
// console.log(result);
// const isBunmi = students.includes("Taiwo");
// // console.log(isBunmi);
// students.sort();
// students.reverse()
// console.log(students);

function oddevenCompetition(array) {
    let even = [];
    let odd = [];

    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        
        if (item % 2===0) {
            even.push(item);
        } else odd.push(item);
    }
    if (even.length > odd.length) {
       return "Even Wins!" 
    } if (odd.length > even.length) {
        return "Odd Wins!"
    }
    return "Draw!"
}

let answer= oddevenCompetition([2,1,4,7])
console.log(answer)
