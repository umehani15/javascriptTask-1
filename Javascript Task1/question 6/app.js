function getMinValue(arr, mapFunc) {
    
    const mappedArray = arr.map(mapFunc);
    
    const minValue = Math.min(...mappedArray);
    
    return minValue;
}
const numbers = [1, 2, 3, 4, 5];

function square(num) {
    return num * num;
}
const minValue = getMinValue(numbers, square);
console.log(minValue); 
