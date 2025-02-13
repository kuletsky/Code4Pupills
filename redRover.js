console.log('Hello world');

a = 5;
b = "10"

// console.log(a + b)

const str = "Hello, my name is John my";
let str1 = "Hello";
let str2 = "World";


console.log(str.length);
console.log(str.at(-1));
console.log(str.charAt(4));
console.log(str1.concat(" ", str2));
console.log(str1 + " / " + str2);
a = str.endsWith("John");
console.log(a);
b = str.includes("bib");
console.log(b);
console.log(str.indexOf("my"));
console.log(str.lastIndexOf("my"));
console.log(str.padEnd(30, "."));
console.log(str.split(" "));
console.log(str.startsWith("Hello"));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let height = 5;
let climbPerDay = 3;
let slidePerNight = 2;
let currentHeight = 0;
let days = 0;

while (true) {
    days++

    currentHeight = currentHeight + climbPerDay;

    if (currentHeight >= height) {
        break;
    }

    currentHeight = currentHeight - slidePerNight;
}

console.log(days)


function greet(name) {
    return 'Hello, ${name} how are you doing today?';
}

console.log(greet("Mike"))

const name = "Mike"
console.log(`Hello, <${name}> how are you doing today?`)