function firstMultiple(n, x, y) {
    let multiples = [];
    for (let i = 0; i <= n; i++) {
      if (i % x === 0 && i % y === 0) {
        multiples.push(i); // If any multiples are found, the result(s) will be converted into an array
      }
    } // For each number i, it checks if i is divisible by both x and y (i.e. i % x === 0 and i % y === 0). If it finds such a number, it returns it. If it reaches the end of the loop without finding any such number, it returns 0.
    return multiples;
  }
  
console.log(firstMultiple(10,10,5)); // This will return an array containing all the multiples

// let name = 'Teni';
// name.toLowerCase
// console.log (name)