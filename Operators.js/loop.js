// for (let i=0; i<=12 ; i++) {
//     console.log("I'm Sorry");
// }

// for (let i=10; i<=12 ; i+=5) {
//     console.log("I'm Sorry");
// }

// function addEvenNumber(){
//     let sum= 0
//     for (let i = 1; i <=20; i++) {
//         if (i % 2 ===0){
//             sum +=i
//         }
        
//     }
//     return sum;
// }
// console.log("Sum = "+ addEvenNumber());

// function sumDouble(a,b){
//     if(a==b){
//         return a+b;
//     } else{
//         return((a+b)*2);
//     }
// }

function parrotTrouble(hour){
    if (hour < 7 || hour > 20){
        return false;
    } return true;
}

const result = parrotTrouble(true,6);
console.log(result);


//whileloop
// let i=5;
// do{
    //     console.log(i);
    //   i--;
    // }while(i>-1);
    // for loop
    // let arr=[1,2,3];
    // for(let i=0;i<arr.length;i++){
        //       console.log(arr[i]);
        // }
        //for in loop
        // let obj={name:"John",age:24};
        // for(let key in obj){
            //           console.log(`${key}: ${obj[key]}`);
            // }
            // break and continue
            // let nums=[1,2,3,4,5];
            // for(let i=0;i<nums.length;i++){
                //             if(nums[i]==2){
                    //               break;
                    //             }else{
                        //                  console.log(nums[i])
                        //              }
                        //          }
                        //          for(let j=0;j<nums.length;j++){
                            //                      if(nums[j]==2){
                                //                        continue;
                                //                      }else{
                                    //                          console.log(nums[j])
                                    //                      }
                                    //                  }
let no = 10;
for (let i = 1; i <= no ; i+=5) {
    console.log(`$(i): I love you`);
}

//sum numbers between 1 to 10

let sum = 0;
for(let i = 0; i<=0; i++){
    sum+=i
}
