import React from "react";
import {URL_COUNTRY} from "../constants.ts";

interface CountryProps {
    countryName: string;
    alpha3Code: string
}

const Country: React.FC<CountryProps> = ({ countryName,alpha3Code }) => {

    const clickCountry = () => {
        console.log(countryName);
        if (alpha3Code) {
            const urlOneCountry = `${URL_COUNTRY}${alpha3Code}`;
            console.log(urlOneCountry);
        }
    };

    return (
        <div>
            <button className="btn" onClick={clickCountry}>{countryName}</button>
        </div>
    );
};

export default Country;
