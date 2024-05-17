function hello(name){
    if (name) {
        return `Hello ${name}, how are you doing?`;
    }
    return `How are you doing?`
}
console.log(hello('Jacqueline'));

function numbers(a,b,c) {
    let sum = a + b + c;
    return sum;
}
console.log(numbers(1,4,3));

function sumAll(a,b,...c){
    let total = a+b;
    let num = [...c];
    for (let i = 0; i < num.length; i++) {
        total += num[i];
    }
    return total;
}
console.log(sumAll(2,3,5,1,6,7,9,))