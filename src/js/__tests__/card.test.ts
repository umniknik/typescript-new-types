import Card from "../card";
import Film from "../film";

test("should add an item to the card", () => {
    const card = new Card();
    const film1 = new Film(122, 'Мстители', 'The Avengers', 'https//:url.com/img.jpg', 2012, 'Avengers Assemble!', ['Фантастика', 'Боевик', 'Фентези'], 137, 2000);
  
    card.add(film1);
    expect(card.items).toContain(film1);
  });
  
  test("should calculate the correct total amount", () => {
    const card = new Card();
    const film1 = new Film(122, 'Мстители', 'The Avengers', 'https//:url.com/img.jpg', 2012, 'Avengers Assemble!', ['Фантастика', 'Боевик', 'Фентези'], 137, 2000);
    const film2 = new Film(1222, 'Мстители2', 'The Avengers', 'https//:url.com/img.jpg', 2012, 'Avengers Assemble!', ['Фантастика', 'Боевик', 'Фентези'], 137, 2000);
  
    card.add(film1);
    card.add(film2);
    expect(card.getAmount()).toBe(4000);
  });
  
  test("should calculate the correct discounted amount", () => {
    const card = new Card();
    const film1 = new Film(122, 'Мстители', 'The Avengers', 'https//:url.com/img.jpg', 2012, 'Avengers Assemble!', ['Фантастика', 'Боевик', 'Фентези'], 137, 2000);
    const film2 = new Film(1222, 'Мстители2', 'The Avengers', 'https//:url.com/img.jpg', 2012, 'Avengers Assemble!', ['Фантастика', 'Боевик', 'Фентези'], 137, 2000);
    const discount = 10; 
  
    card.add(film1);
    card.add(film2);
    expect(card.getAmountDiscounted(discount)).toBe(3600);
  });
  
  test("should remove an item from the card", () => {
    const card = new Card();
    const film1 = new Film(122, 'Мстители', 'The Avengers', 'https//:url.com/img.jpg', 2012, 'Avengers Assemble!', ['Фантастика', 'Боевик', 'Фентези'], 137, 2000);
    const film2 = new Film(1222, 'Мстители2', 'The Avengers', 'https//:url.com/img.jpg', 2012, 'Avengers Assemble!', ['Фантастика', 'Боевик', 'Фентези'], 137, 2000);
  
    card.add(film1);
    card.add(film2);
    card.removeCart(film1.id);
    expect(card.items).not.toContain(film1);
    expect(card.items).toContain(film2);
  });