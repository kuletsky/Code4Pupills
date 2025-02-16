
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



function findMaxSumRow(matrix) {
    let maxIndexRow = -1;
    let maxSum = 0;

    for (let i = 1; i < matrix.length; i++) {
        let rowSum = 0;
        for (let j = 1; j < matrix[i].length; j++) {
            rowSum += matrix[i][j];
        }
        if (rowSum > maxSum) {
            maxSum = rowSum;
            maxIndexRow = i;
        }
    }

    console.log(maxSum, maxIndexRow);
}

// Example usage:
let matrix = [
    [0, 0, 0, 0], 
    [0, 3, 7, 1],  
    [0, 9, 4, 2],  
    [0, 5, 8, 6]
];

findMaxSumRow(matrix);