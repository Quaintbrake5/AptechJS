const fruits = ["mango", 'orange', 'banana', 'apple', 'pear'];

const [a,,,,e] = fruits
// console.log(e);

const messages = ['I', 'love', 'to', 'be', 'here'];
// const [,lv,,,] = messages;
const [first,...restMessage] = messages;
// console.log(restMessage);

const person = {
    fullName: 'David Tari',
    age: 19,
    gender: 'male',
    height: 6.2,
}

const{fullName,gender} = person;
console.log(fullName);