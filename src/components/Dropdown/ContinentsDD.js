import React from 'react';

export default function ContinentsDD({ continents, callback }) {
  return (
    <div>
      <select onChange={(e) => callback(e.target.value)}>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
}
