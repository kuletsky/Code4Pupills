
function Person(name, age, occupation, eyeColor) {

    this.name = name,
    this.age = age,
    this.occupation = occupation,
    this.eyeColor = eyeColor
    
    this.profile = () => {
        console.log(`Hello, I'm ${this.name} and I'm a ${this.occupation}.`);
    }
}

const p1 = new Person('Vasya', 30, 'AQA', 'blue');

p1.profile();

class Person1 {

    constructor() {
        // this.name = name1,
        // this.age = age,
        // this.occupation = occupation,
        // this.eyeColor = eyeColor
    }

    greetings(surname) {
        return `Hi, my name is ${surname}`;
    }

}

const p = new Person1();
console.log(p.greetings('Ivanov'));