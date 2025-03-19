class Song {

    constructor(title, author) {
        this._title = title;
        this._author = author;
    }

    get author() {
        return this._author;
    }

    set author(writer) {
        this._author = writer;
    }

}

const song1 = new Song("Taxi", "Belan");

console.log(`Author is ${song1.author}`);


class Shape {

    constructor(name, sides, sideLength) {
        this._name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    set sides(side) {
        
        if (side <= 0 ) {
            throw new Error("Sides should be more than 0");
        } 
    
        this._sides = side;
    }

    set sideLength(sl) {

        if (sl <= 0) {
            throw new Error("Lenght of side should be more than 0")
        }
    
        this._sideLength = sl;
    
    }

    calcPerimeter() {
        return `Perimeter of ${this._name} is ${this._sideLength*this._sides}`
    }




}

const square = new Shape("Square", 4, 10);
const triangle = new Shape("Triangle", 3, 30);
console.log(square);
console.log(square.calcPerimeter());
console.log(triangle.calcPerimeter());

class Emploee {

    constructor(name, age, position, salary) {
        
        this._name = name;
        this.age = age;
        this.positoin = position;
        this.salary = salary;

    }



}