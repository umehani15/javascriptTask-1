function findSmallestRoundNumber(value) {
    
    value = Math.ceil(value);

    let powerOfTen = 1;
    while (value > powerOfTen) {
        powerOfTen *= 10;
    }
    
    return powerOfTen;
}

console.log(findSmallestRoundNumber(55));  
console.log(findSmallestRoundNumber(590)); 
console.log(findSmallestRoundNumber(1000)); 
console.log(findSmallestRoundNumber(9999)); 
console.log(findSmallestRoundNumber(1234)); 
