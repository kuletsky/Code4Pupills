let day = 'tuesday '
console.log(day.length)

console.log(day.slice(0,4))

//tue day
console.log(day.slice(0,3)+' '+ day.slice(4,7))
 
let splitDay = day.split('s')
console.log(splitDay[1].trim())

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date)
console.log(diff)
diff.toString()

let newQuote = day+ "is Funday"
console.log(newQuote)

console.log(newQuote.indexOf('day', 5))

//is Funday

let count = 0
let value = newQuote.indexOf('day')
console.log(value)
while(value!== -1)
{
    count++
    value = newQuote.indexOf("day", value+1)
}
console.log(count)