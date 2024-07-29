function reverseArray(arr) {
    
    let reversedArr = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        
        reversedArr.push(arr[i]);
    }return reversedArr;
}

let smallArray = [1, 2, 3, 4, 5];
console.log("Original array:", smallArray);
console.log("Reversed array:", reverseArray(smallArray));

let largeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original array:", largeArray);
console.log("Reversed array:", reverseArray(largeArray));
