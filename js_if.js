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

console.log('****************')


let n = 0
    for (let k=5; k<=100; k++)
        {   
            
            if (k%2 == 0 && k%5 == 0)
                {
                    console.log('k%2 = '+ k)
                    n++
                    if (n==3)
                        {break}        
                }
                
        }       


let required = true
while(required)
{
    console.log(required);
    required = false;
}