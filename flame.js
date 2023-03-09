


        // Function to remove common letters from two names

function removeCommonLetters(name1, name2) {

// Convert names to lowercase

name1 = name1.toLowerCase();

name2 = name2.toLowerCase();

// Create an empty string to store unique letters

let unique = "";

// Iterate through each letter in name1

for (let i = 0; i < name1.length; i++) {

    // Check if the letter is not present in name2

    if (name2.indexOf(name1[i]) === -1) {

    // Add the letter to the unique string

    unique += name1[i];

    }

}

// Iterate through each letter in name2

for (let i = 0; i < name2.length; i++) {

    // Check if the letter is not present in name1

    if (name1.indexOf(name2[i]) === -1) {

    // Add the letter to the unique string

    unique += name2[i];

    }

}

// Return the unique string

return unique;

}

// Function to play the Flame game

function playFlame(name1, name2) {

// Remove common letters from the names

let unique = removeCommonLetters(name1, name2);

// Create an array of the Flame letters

let flame = ['F', 'L', 'A', 'M', 'E'];

// Initialize the index to 0

let index = 0;

// Iterate until the unique string is empty

while (unique.length > 0) {

    // Calculate the index of the next letter to remove

    index = (index + unique.length - 1) % flame.length;

    // Remove the letter from the unique string

    unique = unique.slice(0, index) + unique.slice(index + 1);

    // Remove the letter from the Flame array

    flame.splice(index, 1);

}

  //Return the remaining letter from the flame array

return flame[0];

}

  function play() {

   let name1 = document.getElementById("name1").value;

   let name2 = document.getElementById("name2").value;

   let result = playFlame(name1, name2);

   document.getElementById("result").innerText = "Result: " + result;

  }

