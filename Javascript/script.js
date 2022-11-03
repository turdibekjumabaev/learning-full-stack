// Lesson: 1
// Date: 1.11.2022
// Teacher: Samar Badriddinov
// Code:

/*
let maxSpeed;
maxSpeed = 15;
console.log(maxSpeed);
        */

// Lesson: 2
// Date: 1.11.2022
// Teacher: Samar Badriddinov
// Code:

/*
let myName = "Turdıbek";                    // string
console.log(myName);                        // Turdıbek

let age = 17;                               // number
console.log(age);                           // 17

let married = false;                        // boolean
console.log(married);                       // false

let foo;                                    // undefined
console.log(foo);                           // undefined

let a = null;                               // null
console.log(a);                             // null

let arr = ['Apple', 'Banana', 'Cherry'];    // array
console.log(arr);                           // ['Apple', 'Banana', 'Cherry']

let person = {
    name: "Turdıbek",   // string
    age: 17,            // number
    isMarried: false,   // boolean
}                                           // object
console.log(person);                        // {name: "Turdıbek", age: 17, isMarried: false}


let x = 10;
let y = 5;

console.log(x + y);                         // 15
console.log(x - y);                         // 5
console.log(x * y);                         // 50
console.log(x / y);                         // 2
console.log(x % y);                         // 0

x++;
console.log(x);                             // 11
y--;
console.log(y);                             // 4

console.log(7 == 7);                        // true
console.log('7' == 7);                      // ture
console.log('7' === 7);                     // false

console.log(1 / 0);                         // Infinity
console.log(-1 / 0);                        // -Infinity

console.log('7' + 7);                       // 77

alert("never stop...");
confirm("Do you want to give up?");

let answer = confirm("Is married?");
console.log(answer);                        // true or false

prompt("say something");

let youName = prompt("What is your name?");
console.log(youName);                       // Turdıbek
        */


// Lesson: 3
// Date: 1.11.2022
// Teacher: Samar Badriddinov
// Code:

/*
// for loop
for (let i = 1; i <= 5; i++){
    console.log(i);
}

// do-while loop
let i = 1
do {
    console.log(i);
    i++;
} while (i <= 5);

// while loop
let j = 1;
while (j <= 5){
    console.log(j);
    j++;
}

let answers = [];
let questions = [
    'What is your name?',
    'What is your phone?',
    'How old are you?',
]

for (let k = 0; k < questions.length; k++){
    answers[k] = prompt(questions[k]);
}

console.log(answers);                       // [ "Turdıbek", "93 949 59 69", "17" ]
        */

// Lesson: 4
// Date: 1.11.2022
// Teacher: Samar Badriddinov
// Code:

/*
let age = +prompt("How old are you?");

if (age < 18){
    alert("You are young");
} else if (age > 80){
    alert("you are late");
} else {
    alert("Welcome to my site...");
}

switch (age){
    case 18:
        alert("you are 18 years old");
        break;
    case 50:
        alert("you are 50 years old");
        break;
    default:
        alert("Your age is unknown");
}
        */

// Lesson: 5
// Date: 1.11.2022
// Teacher: Samar Badriddinov
// Code:

/*
function functionHello(){
    console.log("Hi there, i am programmer.");
}                                                   // function decloration

functionHello();                                    // Hi there, i am programmer.


helloFunc("Turdıbek");                              // Hi, my name is Turdıbek
function helloFunc(firstName){
    console.log(`Hi, my name is ${firstName}`);
}                                                   // function decloration

helloFunc("Muwsa");                                 // Hi, my name is Muwsa
helloFunc("Abiw");                                  // Hi, my name is Abiw


let printConsole = function (){
    console.log("Of course I will be a programmer.");
}                                                   // function expression

printConsole();                                     // Of course I will be a programmer.


let num = 5;

function foo() {
    let num = 10;
    console.log(num);
}                                                   // function decloration

foo();                                              // 10
console.log(num);                                   // 5


function myName() {
    return "Turdıbek";
}

console.log(`My name is ${myName()}`);              // My name is Turdıbek
        */

// Lesson: 6
// Date: 1.11.2022
// Teacher: Samar Badriddinov
// Code:

// let headingOne = document.getElementById('goal');
// headingOne.textContent = "hello";
// headingOne.className = "my-goal";
// console.log(headingOne);

// let submitBtn = document.querySelector("#click")
// console.log(submitBtn);

// let input = document.querySelector(".myInput");
// console.log(input.value)

// Lesson: 7
// Date: 3.11.2022
// Teacher: Saidbek Arslonov
// Code:

function calculateBMI(){
    let nameVal = document.querySelector("#name")
    let weightVal = document.querySelector("#weight");
    let heightVal = document.querySelector("#height");
    let result = document.querySelector("#result");

    const name = nameVal.value;
    const weight = parseFloat(weightVal.value);
    const heigth = parseFloat(heightVal.value);

    let bmi = weight / (heigth * heigth);
    // console.log(bmi);

    result.innerHTML = `${name}'s BMI is ${bmi.toFixed(2)}`;
}