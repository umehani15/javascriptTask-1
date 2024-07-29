function filterNegativeNumbers(arr) {
    return arr.filter(function(num) {
        return num >= 0;
    });
}

// Example usage:
let numbers = [3, -1, 4, -2, 6, -3];
let positiveNumbers = filterNegativeNumbers(numbers);
console.log(positiveNumbers); // Output: [3, 4, 6]
