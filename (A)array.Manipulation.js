function processArray(arr) {
    const result = [];
    for (const num of arr) {
        if (num % 2 === 0) {
            result.push(num ** 2);
        } else {
            result.push(num * 3);
        }
    }
    return result;
}

// Example usage:
const inputArray = Array.from({ length: 20 }, (_, i) => i + 1);
const outputArray = processArray(inputArray);
console.log(outputArray);
