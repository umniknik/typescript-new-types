import BuyableFilms from "./buyablefilms"
export default class Card {
    private _items: BuyableFilms[] = [];
    
    add(item: BuyableFilms): void {
        this._items.push(item);
    }

    get items(): BuyableFilms[] {
        return [...this.items];
    }
}