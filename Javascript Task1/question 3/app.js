function countVowels(str) {
    
    str = str.toLowerCase();
const vowels = 'aeiou';

    return str.split('').reduce(function(count, char) {
       
        return vowels.includes(char) ? count + 1 : count;
    }, 0);
}
let exampleString = "Hello World!";
let numberOfVowels = countVowels(exampleString);
console.log(numberOfVowels); // Output: 3
