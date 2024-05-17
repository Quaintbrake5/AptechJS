let message = "This is lovely, and I love it"
// message = message.trimStart()
// console.log(message.length);

//access
// console.log(message.charAt(0));
// console.log(message[0]);
//last
// console.log(message.charAt(message.length - 1));

//convert string to an array
// message = message.split(',');
// console.log(message.join(" "));
// console.log(message.endsWith("lovely"));
// console.log(message.substring(4,8));

// function lowercaseUppercaseCompetition(str) {
//     str = str.split("")
//    let upperCase = 0;
//    let lowerCase = 0;

//     for (let i = 0; i < str.length; i++) {
//         let element = str[i];   
        
//         if (element === element.toUpperCase()) {
//             upperCase++;
//         } else{
//             lowerCase++;
//         }
//     }

//     if (upperCase > lowerCase) {
//         return "Upper Wins!"
//     }
//     if (lowerCase > upperCase) {
//         return "Lower Wins!"
//     } else {
//         return "Draw!"
//     }

// }

// let result = lowercaseUppercaseCompetition("aDs");
// console.log(result);


// function caseSwapper(str) {
//     str=str.split("");
//     for (let i = 0; i < array.length; i++) {
//         let element = str[i];
//         if (element === element.toLowerCase()) {
//             str.splice(i,1,element.toLowerCase());
//         }
//         else{
//             str.splice(i,1,element.toUppercase());
//         }
        
//     }
//     return str.join("");
// }

//  function missingLetter(str) {
//     let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     let start = alphabet.indexOf(str[0]);
//     let len = str.length;
//     let end = alphabet.indexOf(str[len-1]);
//     let completeStr = alphabet.slice(start, end+1);

//     for (let i = 0; i < str.length; i++) {
//         let letter = completeStr[i];

//         if (!str.includes(letter)) {
//             return letter;
//         }
        
//     }
//     return "No missing letter";

// }

// console.log(missingLetter("abcd"));

function missingNumber(str) {

    let completeNoSum = 0;
    let strSum = 0;

    for (let i = 1; i < 9; i++) {
        completeNoSum += i;
    }

    for (let i = 0; i < str.length; i++){
        strSum += Number(str[i])
    }

    let answer = completeNoSum - strSum 

    if (answer != 0) {
        return answer;
    } else {
        return "False"
    }
}


console.log(missingNumber("12346"));