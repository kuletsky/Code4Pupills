const flag = true

if (!flag)
{
    console.log('Condition satisfied')
}
else
{
    console.log('Condition NOT satisfied')
} 


let i = 0;
while(i>10)
{
    i++
    console.log('I am inside loop - ' + i)
}


i = 0
do {
    i++;
} while (i > 10);
console.log(i);


for (let k=5; k<=10; k++)
{
    console.log(k)
}


let required = true
while(required)
{
    console.log(required);
    required = false;
}