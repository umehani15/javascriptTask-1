function findIndexOfItem(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i; 
        }
    }
    return -1;
}
const fruits = ['apple', 'banana', 'cherry', 'date'];
const index = findIndexOfItem(fruits, 'cherry');
console.log(index); 

const indexNotFound = findIndexOfItem(fruits, 'mango');
console.log(indexNotFound); 
