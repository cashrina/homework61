export interface ApiCountry {
    name: string,
    alpha3Code: string,
}

export interface ApiOneCountry {
    name: string;
    alpha3Code: string;
    capital: string;
    population: number;
    borders: string[];
    flag: string;
}