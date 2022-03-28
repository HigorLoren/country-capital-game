import React from 'react';
import ReactDOM from 'react-dom';
import CountryCapitalGame from './CountryCapitalGame';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <h1>Match the capital with the country:</h1>
    <CountryCapitalGame
      data={{
        Afghanistan: 'Kabul',
        Argentina: 'Buenos Aires',
        Bolivia: 'La Paz',
        Brazil: 'Brasília',
        Canada: 'Ottawa',
        Chile: 'Santiago',
        China: 'Beijing',
        Cuba: 'Havana',
        Egypt: 'Cairo',
        England: 'London',
        France: 'Paris',
        Germany: 'Berlin',
        India: 'New Delhi',
        Ireland: 'Dublin',
        Israel: 'Jerusalem',
        Italy: 'Roma',
        Japan: 'Tokyo',
        Peru: 'Lima',
        Portugal: 'Lisboa',
        'Russian Federation': 'Moscow',
        'South Korea': 'Seoul',
        Spain: 'Madrid',
        Ukraine: 'Kyiv',
        'United Arab Emirates': 'Abu Dhabi',
        'United States': 'Washington',
      }}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
