// Higher Order Functions
const numbers = [2,4,5,7,8,9];
function doubleNumber(arr) {
    let double = [];

    for (let i = 0; i < arr.length; i++) {
        double.push(arr[i]*2);
    }
    return double;
}

// console.log(doubleNumber(numbers));

//Map has the function to transform an object into an array... 
const doubleArray = arr => {
    return arr.map(numbers => numbers*2);
};

// console.log(doubleArray([10,12,45]));

const firstLetterCapitalise = sentence => {
    return sentence.split(" ").map(word => word.charAt(0).toUpperCase()+word.slice(1)).join(' ') //In this function, the "split" function is used to separate the sentence by space
                                                                                                // The map function transforms the sentence into individual words
                                                                                                // The charAt function helps to be paricular about the letters  of each word based on their index
                                                                                                // The "toUpperCase" function transforms the required character into upper cases
}
// console.log(firstLetterCapitalise("this is bunmi"));

const product = [
    {
        name: "HP",
        qty: 23,
        price: 200,
    },

    {
        name: "DELL",
        qty: 20,
        price: 400
    },

    {
        name: "MacBook",
        qty: 22,
        price: 500,
    },
]

const blackFridayDiscount = items => {
    return items.map(item => item.price - 50)
}

// console.log(blackFridayDiscount(product));

function addPrice(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i].price
    }
    return total;
}

const totalPrice = product => {
    return product.reduce(( prev, currentValue, index) => currentValue + Number(currentValue.price), 0);
}

// console.log(totalPrice(product));

const prices = [200, 34, 90, 500, 230];
const sumPrices = prices => {
    return prices.filter(price => price > 200)
    .reduce((acc,currentValue) => acc + currentValue, 0);
}

// function fruitRepetition(arr){
    const fruits = ["banana", "apple", "orange", "banana", "pear", "orange"];
//     for (let i = 0; index < arr.length; index++) {
//         if (acc(currentValue)) {
//             acc[currentValue] + 1;
//     }
//     else {
//         acc[currentValue] = 1;
//     }

// }
// return fruits;
// }

// console.log(fruitRepetition);

let result =     fruits.reduce((allFruits, currentFruit) => {
        if (currentFruit  in allFruits){
            allFruits += 1
            // console.log(allFruits);
        } else {
            allFruits = 1
        }
        console.log(allFruits)
        return allFruits;
    },
    );
    // console.log(result);

    console.log(fruitRepetition(fruits))
    ;

