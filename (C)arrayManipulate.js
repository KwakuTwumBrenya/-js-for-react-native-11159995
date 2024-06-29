
// Function to process the array
function processArray(arr) {
    return arr.map(num => (num % 2 === 0) ? num * num : num * 3);
}
 // Function to create an array of strings with exactly 20 characters each
function createArrayOfStrings(size) {
    const charPattern = 'a b c d e f g h i j k l m n o p q r s t'; // 20 characters
    const resultArray = [];

    for (let i = 0; i < size; i++) {
        resultArray.push(charPattern); // Add the 20-character string to the array
    }

    return resultArray;
}

// Create an array of 10 strings, each with 20 characters
const arrayOfStrings = createArrayOfStrings(10);
console.log(arrayOfStrings);
 {;
    }

    return stringArr.map((str, index) => {
        if (numArr[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });