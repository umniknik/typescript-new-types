import Card from "./card";
import Film from "./film";

const card = new Card();

card.add(new Film(122, 'Мстители', 'The Avengers', 'https//:url.com/img.jpg', 2012, 'Avengers Assemble!', ['Фантастика', 'Боевик', 'Фентези'], 137, 2000));

console.log(card.items);
