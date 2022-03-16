import React, { useState, useEffect } from 'react';
import RenderCountries from '../../components/RenderCountries/RenderCountries';
import { fetchCountries } from '../../services/countries';

export default function Main() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>
        {countries.map((country) => (
          <RenderCountries key={country.id} name={country.name} iso2={country.iso2} />
        ))}
      </div>
    </div>
  );
}

// for the flags/use id as key is = countries.id
{
  /* <img 
  src=`https://flagcdn.com/16x12/${iso2}.png`
  srcset=`https://flagcdn.com/32x24/{iso2}.png 2x, 
    https://flagcdn.com/48x36/{iso2}.png 3x` 
  width="16" 
  height="12" 
  alt="South Africa"></img> */
}
