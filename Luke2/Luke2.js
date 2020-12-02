let deliveredPackages = 0;

function doesContainSeven(number) {
    if (number.toString().indexOf('7') > -1) {
        return true;
    }

    return false;
}

function isPrime(number) {
    if (number===1) {
        return false;
    } else if (number === 2) {
        return true;
    } else {
    for (let x = 2; x < number; x++) {
        if (number % x === 0) {
            return false;
        }
    }
        return true;  
    }
}

function findPrevPrime(number) {
    currentNumber = number;
    if (isPrime(currentNumber)) {
        return currentNumber;
    } 
    
    return findPrevPrime(currentNumber-1);
    
}

for (let i = 0; i < 5433000; i++) {
    if (!doesContainSeven(i)) {
        deliveredPackages++;
    } else {
        i += findPrevPrime(i);

    }
}

console.log("Delivered packages: ", deliveredPackages);