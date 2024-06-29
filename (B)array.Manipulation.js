function processArray() {
    let numbers = Array.from({ length: 20 }, (_, i) => i + 1);
    
    // Process the array: square even numbers, triple odd numbers
    let result = numbers.map(x => (x % 2 === 0 ? x ** 2 : x * 3));
    
    return result;
}
let outputArray = processArray();
console.log(outputArray); // Output: [3, 4, 9, 16, 15, 36, 21, 64, 27, 100, 33, 144, 39, 196, 45, 256, 51, 324, 57, 400]

