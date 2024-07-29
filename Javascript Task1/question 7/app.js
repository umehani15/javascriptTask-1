function createUpdatedString(str) {
    if (str.length < 3) {
        return "String length must be 3 or above.";
    }
    
   let lastThreeChars = str.slice(-3);
    let updatedString = lastThreeChars.repeat(4);
    
    return updatedString;
}
console.log(createUpdatedString("JavaScript")); 
console.log(createUpdatedString("Hello")); 
console.log(createUpdatedString("Hani"));
console.log(createUpdatedString("Hi")); 
