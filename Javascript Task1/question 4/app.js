function isPalindrome(str) {
    
    let cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    
  
    let reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
}

// Example usage:
console.log(isPalindrome("kayak")); 
console.log(isPalindrome("mom")); 
console.log(isPalindrome("radar")); 
console.log(isPalindrome("refer")); 
console.log(isPalindrome("hello")); 
console.log(isPalindrome("A man, a plan, a canal, Panama")); 

