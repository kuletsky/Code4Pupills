
module.exports = class Person
{
    age = 25;

    get location()
    {
        return 'Canada'
    }
    //consructor is method which executes by default when you create object of the class
    constructor(firstName, lastName)
    {
        this.firstName = firstName
        this.lastName = lastName
    }
 
    //methods
    fullName()
    {
        console.log(this.firstName +' '+ this.lastName)
    }
}

