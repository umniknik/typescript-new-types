import BuyableFilms from "./buyablefilms";

export default class Film implements BuyableFilms {
    constructor(
        public readonly id: number,
        public readonly name: string,
        public readonly nameEng: string,
        public readonly imgUrl: string,
        public readonly age: number,
        public readonly slogan: string,
        public readonly genre: string[],
        public readonly time: number,
        public readonly price: number,
    ) { }
}