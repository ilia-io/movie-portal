export class FilmsManager {
    constructor() {
        this.films = []
        this.getFilms()
    }
    getFilms = async () => {
        let file = await fetch('/assets/db.json');
        let films: Film[] = [];
        const film: Film = await file.json();
        for (let i = 0; i < 5; i++) {
            films.push(film)
        }
        this.films = films
    }
    films: Film[];
}
let mgr = new FilmsManager()
export default mgr

export interface Film {
    fees: Fees;
    status: null;
    externalId: ExternalID;
    rating: Rating;
    votes: Rating;
    backdrop: Backdrop;
    movieLength: number;
    images: Images;
    productionCompanies: ProductionCompany[];
    spokenLanguages: SpokenLanguage[];
    id: number;
    type: SimilarMovieType;
    name: string;
    description: string;
    distributors: Distributors;
    premiere: Premiere;
    slogan: string;
    year: number;
    budget: Budget;
    poster: Backdrop;
    facts: Fact[];
    genres: Country[];
    countries: Country[];
    videos: Videos;
    seasonsInfo: any[];
    persons: Person[];
    lists: any[];
    typeNumber: number;
    alternativeName: string;
    enName: null;
    names: Name[];
    similarMovies: SimilarMovie[];
    updatedAt: Date;
    imagesInfo: ImagesInfo;
    sequelsAndPrequels: any[];
    ratingMpaa: string;
    shortDescription: string;
    technology: Technology;
    ticketsOnSale: boolean;
    ageRating: number;
    logo: Logo;
    watchability: Watchability;
    top10: null;
    top250: number;
}

export interface Backdrop {
    url: string;
    previewUrl: string;
}

export interface Budget {
    value: number;
    currency: string;
}

export interface Country {
    name: string;
}

export interface Distributors {
    distributor: string;
    distributorRelease: string;
}

export interface ExternalID {
    kpHD: string;
    imdb: string;
    tmdb: number;
}

export interface Fact {
    value: string;
    type: FactType;
    spoiler: boolean;
}

export enum FactType {
    Blooper = "BLOOPER",
    Fact = "FACT",
}

export interface Fees {
    world: Budget;
    russia: Budget;
    usa: Budget;
}

export interface Images {
    postersCount: number;
    backdropsCount: number;
    framesCount: number;
}

export interface ImagesInfo {
    framesCount: number;
}

export interface Logo {
    url: string;
}

export interface Name {
    name: string;
    language?: string;
    type?: null | string;
}

export interface Person {
    id: number;
    photo: string;
    name: string;
    enName: null | string;
    profession: string;
    enProfession: string;
}

export interface Premiere {
    country: string;
    world: Date;
    russia: Date;
    cinema: Date;
    dvd: Date;
    bluray: Date;
}

export interface ProductionCompany {
    name: string;
    url: null | string;
    previewUrl: null | string;
}

export interface Rating {
    kp: number;
    imdb: number;
    filmCritics: number;
    russianFilmCritics: number;
    await: number;
}

export interface SimilarMovie {
    id: number;
    name: string;
    enName: null;
    alternativeName: string;
    type: SimilarMovieType;
    poster: Backdrop;
}

export enum SimilarMovieType {
    Movie = "movie",
}

export interface SpokenLanguage {
    name: string;
    nameEn: string;
}

export interface Technology {
    hasImax: boolean;
    has3D: boolean;
}

export interface Videos {
    trailers: Trailer[];
    teasers: any[];
}

export interface Trailer {
    url: string;
    name: string;
    site: string;
    type: string;
}

export interface Watchability {
    items: Item[];
}

export interface Item {
    name: string;
    logo: Logo;
    url: string;
}