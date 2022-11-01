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