const Person = require("./js_class");

class Pet extends Person
{

    get location()
    {
        return "BlueCross"
    }

    constructor(firsName, lastName)
    {
        super(firsName, lastName)
    }


}

let pet = new Pet('Sam', 'Sac')
pet.fullName()
console.log(pet.location)