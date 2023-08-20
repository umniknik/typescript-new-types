import BuyableFilms from "./buyablefilms"
export default class Card {
    private _items: BuyableFilms[] = [];

    add(item: BuyableFilms): void {
        this._items.push(item);
    }

    get items(): BuyableFilms[] {
        return [...this._items];
    }

    getAmount(): number {
        return this._items.reduce((accum: number, current: BuyableFilms) => accum + current.price, 0);
    }

    getAmountDiscounted(discount: number): number {
        const result = this.getAmount();
        return result - (result * (discount / 100));
    }

    removeCart(id: number): void {
        this._items = this._items.filter((item: BuyableFilms) => item.id !== id);
    }
}