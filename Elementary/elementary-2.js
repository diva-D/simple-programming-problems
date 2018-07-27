// Write a program that asks the user for their name and greets them with their name.

// ES5
function greetUser() {
    var userName = prompt("What is your name?");
    alert("Hi, " + userName);
}

// ES6
let greetUser2 = () => {
    let userName2 = prompt("What is your name?");
    alert(`Hi ${userName2}`);
};