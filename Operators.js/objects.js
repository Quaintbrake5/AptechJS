// function addStringElement(array) {
//     let stringElementSum = '';

//     for (let i = 0; i < array.length; i++) {
//         array.forEach(element => {
//             if(typeof element !== 'string') {
//                 console.log("Not Found")
//               } else {
//                 console.log(`${element}`);
//               }
//         });
//         return stringElementSum;
        
//     }
    
//    }
   
//    let array = [1];
//    console.log(addStringElement(array));

// function checkPalidrone(str) {
//     let string = ""

//     for (let i = str.length; i >= 0; i--) {
//          string += str[i]
//     }

//     if (string !== str) {
//         return false;
//     } else if  (string == str) {
//         return true;
//     }
// }

// let str="noon"
// console.log(checkPalidrone(str));

const anime = {
    firstAnime : "Naruto",
    secondAnime : "One Piece",
    thirdAnime : "Dragon Ball Super",
    favouriteAnimeChar : "Luffy",
    favouriteFirstAnimeChar : "Itachi",
    firstAnimeRating : "80%",
    secondAnimeRating : "90%",
    thirdAnimeRating : "78%",


}

// anime.greet = function() {
//     return `Hello ${this.firstAnime} and ${this.favouriteAnimeChar}! `
// }

// console.log(anime.greet())

for (let myKey in anime) {
    console.log(`${myKey}`)
}

if ("firstAnimeRating" in anime) {
    console.log("The key exists")

} else {
    console.log("The key does not exist")
}

// console.log(anime.firstAnime)
// console.log(anime.secondAnime)
// console.log(anime.thirdAnime)
// console.log(anime.favouriteAnimeChar)
// console.log(anime.favouriteFirstAnimeChar)
// console.log(anime.firstAnimeRating)
// console.log(anime.secondAnimeRating)
// console.log(anime.thirdAnimeRating) 