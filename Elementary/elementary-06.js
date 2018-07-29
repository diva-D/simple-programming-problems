// Write a program that asks the user for a number n and gives them the possibility to choose between computing the sum and computing the product of 1,…,n.

let sumOrProduct = () => {
    let userNumber = prompt("Please enter a number");
    let userChoice = prompt(`Would you like to calculate the sum or product of (1,..,n)? 
                            (Enter 'product' or 'sum' below)`);
    if (userChoice === "product") {
        return productCalculation(userNumber);
    } else if (userChoice === "sum") {
        return sumCalculation(userNumber);
    } else {
        alert("Invalid entry - please enter either 'product' or 'sum'")
    }
};

let productCalculation = number => {
    let product = number;
    for (let i = 1; i < number; i++) {
        product *= i;
    }
    return product;
}

let sumCalculation = number => {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    return sum;
}

