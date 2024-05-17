// Create an array to hold all the possible values
const values = ['Norwegian', 'British', 'Danish', 'Swedish', 'German',
                'Red', 'Green', 'Yellow', 'Blue', 'White',
                'Tea', 'Coffee', 'Milk', 'Water', 'Beer',
                'Pall Mall', 'Dunhill', 'Blends', 'Prince',
                'Dogs', 'Cats', 'Birds', 'Horses', 'Fish'];

// Create an array to hold the values assigned to each house
const houseValues = new Array(5).fill(null).map(() => []);

// Define the constraints
const constraints = [
  [0, 1, 'Norwegian', 'Red'],
  [1, 0, 'British', 'Tea'],
  [2, 3, 'Danish', 'Coffee'],
  [3, 2, 'Green', 'Dogs'],
  [3, 4, 'Yellow', 'Pall Mall'],
  [4, 3, 'Blue', 'Birds'],
  [2, 2, 'Milk'],
  [0, 4, 'Blue'],
  [0, 1, 'Blends', 'Cats'],
  [1, 2, 'Horses', 'Dunhill'],
  [2, 3, 'Blue Master', 'Beer'],
  [3, 3, 'Prince'],
  [0, 4, 'Blends', 'Water'],
];

// Define a function to check if a constraint is satisfied
function isConstraintSatisfied(constraint) {
  const [house1, house2, value1, value2] = constraint;
  return houseValues[house1].includes(value1) === houseValues[house2].includes(value2);
}

// Define a function to assign a value to a house
function assignValue(house, value) {
  if (!houseValues[house].includes(value)) {
    houseValues[house].push(value);
    return true;
  }
  return false;
}

// Define a function to backtrack
function backtrack(currentHouse) {
  if (currentHouse === 5) {
    return true;
  }

  for (let i = 0; i < values.length; i++) {
    const constraint = [currentHouse, i, ...constraints[i]];
    if (isConstraintSatisfied(constraint)) {
      if (assignValue(currentHouse, values[i])) {
        if (backtrack(currentHouse + 1)) {
          return true;
        }
      }
    }
    houseValues[currentHouse] = houseValues[currentHouse].slice(0, -1);
  }

  return false;
}

// Call the backtracking function
backtrack(0);

// Find the owner of the fish
const fishOwner = houseValues[4].findIndex(value => value === 'Fish') + 1;
console.log(`The owner of the fish is the person in house ${fishOwner}.`);