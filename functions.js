'use strict';

// 1. isHometown
function isHomeTown(town) {
    return town === 'San Francisco';
}


// 2. getFullName
function GetFullName(first,last){
    return `${first} ${last}`
}


// 3. calculateTotal
function calculateTotal(basePrice, state, tax=0.05) {
    const subtotal = basePrice * (1 + tax);
    
    if (state === "CA"){
        fee = 0.03 * subtotal
    } else if (state === "PA"){
        fee = 2;
    } else if (state === "MA"){
        if (basePrice <= 100) {
            fee = 1;
        } else {
            fee = 3;
        }      
    }
    return subtotal + fee;
}