// let i=1;
// while (i<=10){
//     console.log()
// }

// let i=1;
// let sum=0;
// while(i<=20){
//     if(i%3===0){
//         sum+=i;
//     }
//     i++;
// }

// console.log("sum="+sum);

function multiples(start,end) {
let sum=0;
while(start<end){
    if (start%3===0 && start%3===0) {
        sum+=start;
    }
    start++;
}
return sum;
}
let result = multiples(1,100);
console.log("sum="+result);
