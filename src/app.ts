import Card from "./card";

const card = new Card();

card.add({
    id: 122,
    name: 'Мстители',
    nameEng: 'The Avengers',
    imgUrl: 'https//:url.com/img.jpg',
    age: 2012,
    slogan: 'Avengers Assemble!',
    genre: ['Фантастика', 'Боевик', 'Фентези'],
    time: 137
});

console.log(card.items);
