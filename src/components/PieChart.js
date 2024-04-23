import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend } from 'chart.js';
import './PieChart.css';

ChartJS.register(ArcElement, Title, Tooltip, Legend);

const PieChart = ({ historicalData }) => {
  const getLatestValue = (data) => {
    if (!data) return 0;
    const values = Object.values(data);
    return values[values.length - 1] || 0;
  };

  const totalCases = getLatestValue(historicalData.cases);
  const totalRecovered = getLatestValue(historicalData.recovered);
  const totalDeaths = getLatestValue(historicalData.deaths);

  const chartData = {
    labels: ['Total Cases', 'Recovered', 'Deaths'],
    datasets: [
      {
        data: [totalCases, totalRecovered, totalDeaths],
        backgroundColor: ['#ff7782', '#38ef7d', '#9694ff'],
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'COVID-19 Cases Distribution',
      },
    },
  };

  return (
    <div className="pie-chart">
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;