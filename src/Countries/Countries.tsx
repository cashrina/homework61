import axios from 'axios';
import { useCallback, useEffect, useState } from "react";
import Country from "../Country/Country.tsx";
import {ApiCountry} from "../types.ts";

const URL = "https://restcountries.com/v2/all?fields=alpha3Code,name";
const Countries = () => {
    const [countries, setCountries] = useState<ApiCountry[]>([]);

    const fetchCountries = useCallback(async () => {
        const response = await axios.get(URL);
        setCountries(response.data);
        console.log(response.data);
    }, [setCountries]);

    useEffect(() => {
        void fetchCountries();
    }, [fetchCountries]);

    return (
        <div>
            {countries.map((country, index) => (
                <Country key={index} countryName={country.name} />
            ))}
        </div>
    );
};

export default Countries;
