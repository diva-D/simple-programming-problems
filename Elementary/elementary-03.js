// Modify the previous program such that only the users Alice and Bob are greeted with their names.

// ES5
function greetUser() {
    var userName = prompt("What is your name?");
    if (userName === 'Alice' || userName === 'Bob') {
        alert("Hi, " + userName);
    }
}


// ES6
let greetUser2 = () => {
    let userName2 = prompt("What is your name?");
    if (userName === 'Alice' || userName === 'Bob') {
        alert(`Hi ${userName2}`);
    }
};