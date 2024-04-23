
import React, { useState, useEffect } from 'react';
import CountryDropdown from './components/CountryDropdown';
import StatisticalCard from './components/StatisticCard';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import './App.css';
import { fetchHistoricalData, fetchCountries } from './services/apiServices';

const App = () => {
  const [countryData, setCountryData] = useState([]);
  const [historicalData, setHistoricalData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState('USA');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [countryData, historicalData] = await Promise.all([
          fetchCountries(),
          fetchHistoricalData(selectedCountry),
        ]);

        setCountryData(countryData);
        setHistoricalData(historicalData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedCountry]);

  const handleCountryChange = (countryCode) => {
    setSelectedCountry(countryCode);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app">
      <header className="app-header">
        <h1>COVID-19 Dashboard</h1>
        <CountryDropdown
          countryData={countryData}
          selectedCountry={selectedCountry}
          handleCountryChange={handleCountryChange}
        />
      </header>
      <main>
        <div className="statistical-cards">
          <StatisticalCard
            title="Total Cases"
            value={historicalData.cases?.[Object.keys(historicalData.cases).pop()] || 0}
            color="#ff7782"
          />
          <StatisticalCard
            title="Recovered"
            value={historicalData.recovered?.[Object.keys(historicalData.recovered).pop()] || 0}
            color="#38ef7d"
          />
          <StatisticalCard
            title="Deaths"
            value={historicalData.deaths?.[Object.keys(historicalData.deaths).pop()] || 0}
            color="#9694ff"
          />
        </div>
        <div className="charts">
          <LineChart historicalData={historicalData} />
          <PieChart historicalData={historicalData} />
        </div>
      </main>
    </div>
  );
};

export default App;