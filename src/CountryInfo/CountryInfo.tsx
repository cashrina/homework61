import React from "react";

interface CountryInfoProps {
    country_name: string;
    country_capital: string;
    country_population: number;
    country_flag: string;
    country_borders: string[];
}

const CountryInfo: React.FC<CountryInfoProps> = ({
                                                     country_name,
                                                     country_capital,
                                                     country_population,
                                                     country_flag,
                                                     country_borders,
                                                 }) => {
    return (
        <div className="row">
            <div className="col-md-8 offset-md-4">
                <div className="country-details">
                    <h1>{country_name}</h1>
                    <img className="img-fluid country-flag shadow-lg" alt={`${country_name}-flag-image`} src={country_flag} style={{maxHeight: '400px', maxWidth: '400px'}} />
                    <h4 className="mt-4">Capital: {country_capital}</h4>
                    <h5>Population: {country_population}</h5>
                    {country_borders && country_borders.length > 0 ? (
                        <div>
                            <h3>Borders with:</h3>
                            <ul>
                                {country_borders.map((border, index) => (
                                    <li key={index}>{border}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p>Border no</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CountryInfo;
