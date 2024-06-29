// arrayManipulation.js

// Function to process the array
function processArray(arr) {
    return arr.map(num => (num % 2 === 0) ? num * num : num * 3);
}

// Function to format array of strings based on processed numbers
function formatArrayStrings(stringArr, numArr) {
    if (stringArr.length !== numArr.length) {
        throw new Error("Arrays must have the same length");
    }

    return stringArr.map((str, index) => {
        if (numArr[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}

module.exports = {
    processArray,
    formatArrayStrings
};
