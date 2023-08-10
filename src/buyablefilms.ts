export default interface BuyableFilms {
    readonly id: number,
    readonly name: string,
    readonly nameEng: string,
    readonly imgUrl: string,
    readonly age: number,
    readonly slogan: string,
    readonly genre: string[],
    readonly time: number,
};
