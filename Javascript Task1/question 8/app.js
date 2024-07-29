function findAngleType(angle) {
    
    if (angle < 0 || angle > 180) {
        return "Invalid angle";
    }
    
    if (angle === 90) {
        return "Right angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else {
        return "Invalid angle";
    }
}

console.log(findAngleType(45));  
console.log(findAngleType(90)); 
console.log(findAngleType(120)); 
console.log(findAngleType(180)); 
console.log(findAngleType(-10)); 
console.log(findAngleType(200)); 
