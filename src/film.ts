import BuyableFilms from "./buyablefilms";

export default class Film implements BuyableFilms {
    constructor(readonly id: number,
        readonly name: string,
        readonly nameEng: string,
        readonly imgUrl: string,
        readonly age: number,
        readonly slogan: string,
        readonly genre: string[],
        readonly time: number
    ) {
        this.id = id;
        this.name = name;
        this.nameEng = nameEng;
        this.imgUrl = imgUrl;
        this.age = age;
        this.slogan = slogan;
        this.genre = genre;
        this.time = time;
    }

    
}