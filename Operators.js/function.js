function validVoters(){
// let age = parseInt(prompt("Enter your age!"));
let age=document.getElementById("userage").value;

let output = document.getElementById("info")
if(age < 18){
    output.innerText = "Sorry, you are not eligible to vote!";
} else{
    output.innerText = "Congratulations! You can vote.";
    
  }
}

// function addTwo(no1,no2){
//     return no1 + no2;
// }
// // console.log(addTwo(23,7));
// // console.log(addTwo(90,2));

// const G = 9.8*Math.pow(10,22);
// function getForce(m1,m2,r){
//     const F = (G*m1*m2)/Math.pow(r,2)
//     return F;
// }
// const result = getForce(2, 1, 6)
// if (result>10){
//     console.log(result);
// }