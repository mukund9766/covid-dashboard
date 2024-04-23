import axios from 'axios';

export const fetchHistoricalData = async (country) => {
  try {
    const response = await axios.get(`https://disease.sh/v3/covid-19/historical/${country.toLowerCase()}?lastdays=1500`);
    return response.data;
  } catch (error) {
    console.error('Error fetching historical data:', error);
    throw error;
  }
};

export const fetchCountries = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
};