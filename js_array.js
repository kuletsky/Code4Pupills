var marks = [10,20,30,40]
console.log(marks[2])

marks[3] = 50
console.log(marks)
console.log(marks.length)

marks.push(60)
console.log(marks)

marks.pop()
console.log(marks)

marks.unshift(5)
console.log(marks)

console.log(marks.indexOf(50))

console.log(marks.includes(100))

subMarks = marks.slice(1, 3)
console.log(subMarks)

var sum = 0
for (let i=0; i<marks.length; i++)
{
    sum+=marks[i]
    console.log(marks[i], sum)
}

let total = marks.reduce((total, sum) => sum+total, 0)
console.log(total)


var scores = [3, 7, 9, 12, 16]
var evenScore = []
for (let i=0; i<scores.length; i++)
{
    if (scores[i]%2 == 0)
    {
        evenScore.push(scores[i])
    }
}
console.log(evenScore)


let newscores = scores.filter(score=>score>12)
console.log(newscores)


let numbers = [1, 2, 3, 4];
let doubled = numbers.map(num => num * 2);
console.log(doubled)

let number = [12,2,435,646,4]
let sumValue = number.filter(score=>score%2==0).map(score=>score*2).reduce((sum, val)=>sum+val,0)
console.log(sumValue)


  