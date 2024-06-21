import React, { useCallback, useState } from 'react';
import { URL_COUNTRY } from '../constants.ts';
import { ApiOneCountry } from '../types.ts';
import axios from 'axios';
import CountryInfo from '../CountryInfo/CountryInfo.tsx';

interface CountryProps {
    countryName: string;
    alpha3Code: string;
}

const Country: React.FC<CountryProps> = ({ countryName, alpha3Code }) => {
    const [countryOne, setCountryOne] = useState<ApiOneCountry | null>(null);
    const [showCountryInfo, setShowCountryInfo] = useState(false);

    const fetchCountryData = useCallback(async () => {
        try {
            const response = await axios.get(`${URL_COUNTRY}${alpha3Code}`);
            const country = response.data;

            if (country) {
                setCountryOne(country);
            } else {
                console.error('No country data found for', countryName);
            }
        } catch (error) {
            console.error('Error fetching country data:', error);
        }
    }, [countryName, alpha3Code]);

    const countryClick = () => {
        if (!showCountryInfo) {
            void fetchCountryData();
        }
        setShowCountryInfo(prev => !prev);
    };

    return (
        <div>
            <button className="btn" onClick={countryClick}>
                {countryName}
            </button>
            <div>
                {showCountryInfo && countryOne && (
                    <CountryInfo
                        country_name={countryOne.name}
                        country_capital={countryOne.capital}
                        country_population={countryOne.population}
                        country_flag={countryOne.flag}
                        country_borders={countryOne.borders}
                    />
                )}
            </div>
        </div>
    );
};

export default Country;
