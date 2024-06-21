import axios from 'axios';
import { useCallback, useEffect, useState } from "react";
import Country from "../Country/Country.tsx";
import {ApiCountry} from "../types.ts";
import {URL} from "../constants.ts";

const Countries = () => {
    const [countries, setCountries] = useState<ApiCountry[]>([]);

    const fetchCountries = useCallback(async () => {
        const response = await axios.get(URL);
        setCountries(response.data);
    }, [setCountries]);

    useEffect(() => {
        void fetchCountries();
    }, [fetchCountries]);

    return (
        <div className="overflow-auto scrollbar-custom border border-primary rounded-start shadow-lg" style={{ maxHeight: "600px" }}>
            {countries.map((country, index) => (
                <Country key={index} countryName={country.name} alpha3Code={country.alpha3Code} />
            ))}
        </div>
    );
};

export default Countries;
