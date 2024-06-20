import React from "react";

interface CountryProps {
    countryName: string;
}
const Country: React.FC<CountryProps> = ({countryName}) => {
    return (
        <div>
            <p>{countryName}</p>
        </div>
    );
};

export default Country;