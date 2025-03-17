const cars = {  
    car1: {
        name: "Toyota",
        model: "Camry",
        year: "2024",
        color: "gray"
    },
    car2: {
        name: "Honda",
        model: "Accord",
        year: "2023",
        color: "red"
    }
}

console.log(cars);
console.log(cars.car2.name);

const room = {
    height: "3",
    tv: "samsung",
    big: true
}

console.log(room);
console.log(typeof room.big);
console.log(room.tv.length);
console.log(room.tv.length-1);
console.log(room.tv.toUpperCase());
room.tv = "LG";
console.log(room.tv);
room.furniture = ["table", "chair", "sofa"];
console.log(room);
delete room.big;
console.log(room);

const animal = {
    name: "dog",
    legs: 4,
    color: "yellow"
};

const str = function(obj) {`This ${obj.color} ${obj.name} has ${obj.legs} legs}`};
console.log(str(animal));

const developers = [
    { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', age: 29, language: 'Ruby' },
    { firstName: 'Peter', lastName: 'B.', country: 'Poland', age: 48, language: 'Javascript' },
    { firstName: 'Natasha', lastName: 'P.', country: 'Mexico', age: 25, language: 'C#' },
    { firstName: 'Josh', lastName: 'A.', country: 'USA', age: 26, language: 'C#' },
    { firstName: 'Augusto', lastName: 'C.', country: 'Spain', age: 32, language: 'Java' },
    { firstName: 'Lei Mi', lastName: 'S.', country: 'China', age: 52, language: 'Fortran' },
    { firstName: 'Mikey', lastName: 'L.', country: 'New Zealand', age: 30, language: 'Node' }
];

const result = function(a) 
{
    for (const developer in a) {
        if (developer.language == 'Javascript') {
            return "Yes"
        }
    return "No";
    
}
}

console.log(result(developers));

let books = [
    {
        isbn: 101,
        title: "The Dark Tower I: The Gunslinger",
        author: "Stephen King",
        writtenYear: 1982,
        genre: "Fantasy",
        pages: 224,
        rank: 1,
        quote: "The man in black fled across the desert, and the gunslinger followed."
    },
    {
        isbn: 102,
        title: "The Shining",
        author: "Stephen King",
        writtenYear: 1977,
        genre: "Horror",
        pages: 447,
        rank: 5,
        quote: "Jack Torrance thought: Officious little prick."
    },
    {
        isbn: 103,
        title: "Mr. Mercedes",
        author: "Stephen King",
        writtenYear: 2014,
        genre: "Thriller",
        pages: 436,
        rank: 3,
        quote: "In the frigid pre-dawn hours, in a distressed Midwestern city, hundreds of desperate unemployed folks are lined up for a spot at a job fair."
    },
    {
        isbn: 104,
        title: "It",
        author: "Stephen King",
        writtenYear: 1986,
        genre: "Horror",
        pages: 1138,
        rank: 4,
        quote: "The terror, which would not end for another twenty-eight years – if it ever did end – began, so far as I know or can tell, with a boat made from a sheet of newspaper floating down a gutter swollen with rain."
    },
    {
        isbn: 105,
        title: "Joyland",
        author: "Stephen King",
        writtenYear: 2013,
        genre: "Mystery",
        pages: 288,
        rank: 2,
        quote: "I had a car, but on most days in that fall of 1973 I walked to Joyland from Mrs. Shoplaw's Beachside Accommodations in the town of Heaven's Bay."
    },
    {
        isbn: 106,
        title: "The Adventures of Tom Sawyer",
        author: "Mark Twain",
        writtenYear: 1876,
        genre: "Children's literature",
        pages: 244,
        rank: 1,
        quote: "Saturday morning was come, and all the summer world was bright and fresh, and brimming with life."
    },
    {
        isbn: 107,
        title: "Adventures of Huckleberry Finn",
        author: "Mark Twain",
        writtenYear: 1885,
        genre: "Children's literature",
        pages: 362,
        rank: 2,
        quote: "You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter."
    },
    {
        isbn: 108,
        title: "The Prince and the Pauper",
        author: "Mark Twain",
        writtenYear: 1882,
        genre: "Fiction",
        pages: 224,
        rank: 3,
        quote: "In the ancient city of London, on a certain autumn day in the second quarter of the sixteenth century, a boy was born to a poor family of the name of Canty, who did not want him."
    },
    {
        isbn: 109,
        title: "The Horse's Tale",
        author: "Mark Twain",
        writtenYear: 1907,
        genre: "Fiction",
        pages: 153,
        rank: 4,
        quote: "I am Buffalo Bill's horse"
    },
    {
        isbn: 110,
        title: "The Mysterious Stranger",
        author: "Mark Twain",
        writtenYear: 1916,
        genre: "Novella",
        pages: 176,
        rank: 5,
        quote: "IT was in 1590—winter."
    },
    {
        isbn: 111,
        title: "Eugene Onegin",
        author: "Aleksandr Pushkin",
        writtenYear: 1833,
        genre: "Romance",
        pages: 224,
        rank: 1,
        quote: "Мой дядя самых честных правил, когда не в шутку занемог, он уважать себя заставил и лучше выдумать не мог."
    },
    {
        isbn: 112,
        title: "Ruslan and Lyudmila",
        author: "Aleksandr Pushkin",
        writtenYear: 1820,
        genre: "Fairy tale",
        pages: 320,
        rank: 2,
        quote: "Дела давно минувших дней, преданья старины глубокой."
    },
    {
        isbn: 113,
        title: "The Bronze Horseman",
        author: "Aleksandr Pushkin",
        writtenYear: 1833,
        genre: "War story, Romance novel",
        pages: 261,
        rank: 4,
        quote: "На берегу пустынных волн стоял он, дум великих полн"
    },
    {
        isbn: 114,
        title: "The Prisoner of the Caucasus",
        author: "Aleksandr Pushkin",
        writtenYear: 1821,
        genre: "Narrative poem",
        pages: 36,
        rank: 5,
        quote: "Прими с улыбкою, мой друг, свободной музы приношенье"
    },
    {
        isbn: 115,
        title: "The Captain's Daughter",
        author: "Aleksandr Pushkin",
        writtenYear: 1836,
        genre: "Historical novel",
        pages: 192,
        rank: 4,
        quote: "Отец мой Андрей Петрович Гринев в молодости своей служил при графе Минихе и вышел в отставку премьер-майором в 17.. году."
    }
];


const bookNames = []; 

    for (const book of books) {
        bookNames.push(book.title);
    };

console.log(bookNames);

const mostPopularBook = books.filter((book) => {
    return book.rank === 1;
}).map((book) => {
    return `Most popular book by ${book.author} is ${book.title}.`;
});
console.log(mostPopularBook.join('\n'));

const sortedBooks = books.sort((a, b) => {
    return a.writtenYear - b.writtenYear;
});
console.log(sortedBooks);