import React from 'react';

export default function RenderCountries({ name, iso2 }) {
  return (
    <div>
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <img
          src={`https://flagcdn.com/16x12/${iso2.toLowerCase()}.png`}
          width="16"
          height="12"
          alt={name}
        ></img>
      </div>
    </div>
  );
}
