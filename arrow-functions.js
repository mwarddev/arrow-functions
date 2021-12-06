/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers(a, b) {
    // Code block
    return a + b;
}
let sum = addTwoNumbers(36, 6);
console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers1 = (a, b) => {
    // Code block
    return a + b;
}
let sum1 = addTwoNumbers1(36, 6);
console.log(sum1);

// Single Line Arrow Function With Parameters
// const addTwoNumbers2 =(a, b) => (a + b); //Also valid
const addTwoNumbers2 = (a, b) => a + b;
let sum2 = addTwoNumbers2(36, 6);
console.log(sum2);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething("Hello, World!");

// Empty parenthesis needed for zero argument function
const sayHello = () => console.log("Hello!");
sayHello();
// Returning Multiple Lines
// Empty parenthesis needed for multi-line string return 
const returnMultipleLines = () => (
    `<p>
    This is a multi-line string!
    </p>`
)
console.log(returnMultipleLines());