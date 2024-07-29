function isInRange(val1, val2) {
 
    return (val1 >= 50 && val1 <= 99) || (val2 >= 50 && val2 <= 99);
}


console.log(isInRange(55, 30)); 
console.log(isInRange(25, 80)); 
console.log(isInRange(45, 105)); 
console.log(isInRange(50, 99));
console.log(isInRange(49, 100));
