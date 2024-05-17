function maxGames(P, C) {
    // If there are more players than courts, return -1 as it's impossible to host all games at the same time
     if (P > C) {
       return -1;
     }
   
     // Create an array to store the game start times
     const gameStartTimes = new Array(C).fill(0);
   
     // Create an array to store the game end times
     const gameEndTimes = new Array(C).fill(0);
   
     // Initialize the game start times and game end times arrays
     for (let i = 0; i < C; i++) {
       gameStartTimes[i] = i;
       gameEndTimes[i] = i + 1;
     }
   
     // Create a priority queue to store the game end times
     const gameEndTimesQueue = [];
   
     // Initialize the priority queue with the initial game end times
     for (let i = 0; i < C; i++) {
       gameEndTimesQueue.push([gameEndTimes[i], i]);
     }
   
     // Sort the priority queue in descending order of game end times
     gameEndTimesQueue.sort((a, b) => b[0] - a[0]);
   
     // Initialize the count of games that can be hosted at the same time
     let maxGames = 0;
   
     // Initialize the count of games that are currently being hosted
     let currentGames = 0;
   
     // While there are games to be hosted
     while (gameEndTimesQueue.length > 0) {
       // Get the game with the earliest end time
       const [earliestEndTime, earliestEndIndex] = gameEndTimesQueue.shift();
   
       // If there are no games currently being hosted or the game with the earliest end time ends after the game currently being hosted
       if (currentGames === 0 || earliestEndTime > gameEndTimes[currentGames - 1]) {
         // Increment the count of games that can be hosted at the same time
         maxGames++;
   
         // Increment the count of games that are currently being hosted
         currentGames++;
       } else {
         // Decrement the count of games that are currently being hosted
         currentGames--;
       }
   
       // If there are no games currently being hosted
       if (currentGames === 0) {
         // Update the game start times and game end times arrays
         for (let i = 0; i < C; i++) {
           gameStartTimes[i] = earliestEndTime + 1;
           gameEndTimes[i] = earliestEndTime + 2;
         }
   
         // Reinitialize the priority queue with the updated game end times
         gameEndTimesQueue.length = 0;
         for (let i = 0; i < C; i++) {
           gameEndTimesQueue.push([gameEndTimes[i], i]);
         }
   
         // Reinitialize the count of games that are currently being hosted
         currentGames = 0;
       }
     }
   
     // Return the maximum number of games that can be hosted at the same time
     return maxGames;
   }

   // This program uses a priority queue to keep track of the game end times. The priority queue is sorted in descending order of game end times, so the game with the earliest end time is always at the front of the queue. The program initializes the game start times and game end times arrays, and then uses a while loop to host games until there are no more games to be hosted.

// Inside the while loop, the program gets the game with the earliest end time from the priority queue, and checks if it can be hosted at the same time as the currently hosted games. If it can, the program increments the count of games that can be hosted at the same time, and increments the count of games that are currently being hosted. If it can't, the program decrements the count of games that are currently being hosted.

// After hosting a game, the program updates the game start times and game end times arrays, and reinitializes the priority queue with the updated game end times. The program continues this process until there are no more games to be hosted, at which point it returns the maximum number of games that can be hosted at the same time.

// Note that if there are more players than courts, the program returns -1, as it's impossible to host all games at the same time.

