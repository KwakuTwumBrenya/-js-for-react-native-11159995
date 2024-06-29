// Function to create an array of strings with exactly 20 characters each
function createArrayOfStrings(size) {
    const charPattern = 'Bright", "Cloe", "Charlie", "David", "Evelyn", 
    "Francis", "Gracie", "Henk", "Ivy", "Jill", 
    "Karen", "Leo", "Mona", "Nina", "Oscar", 
    "Paul", "Quinn", "Rose", "Steve", "Tina"; // 20 characters
    const resultArray = [];

    for (let i = 0; i < size; i++) {
        resultArray.push(charPattern); // Add the 20-character string to the array
    }

    return resultArray;
}

// Create an array of 10 strings, each with 20 characters
const arrayOfStrings = createArrayOfStrings(10);
console.log(arrayOfStrings);
