import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import './LineChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ historicalData }) => {
  const chartData = {
    labels: historicalData.cases ? Object.keys(historicalData.cases) : [],
    datasets: [
      {
        label: 'Total Cases',
        data: historicalData.cases ? Object.values(historicalData.cases) : [],
        borderColor: '#ff7782',
        fill: false,
      },
      {
        label: 'Recovered',
        data: historicalData.recovered ? Object.values(historicalData.recovered) : [],
        borderColor: '#38ef7d',
        fill: false,
      },
      {
        label: 'Deaths',
        data: historicalData.deaths ? Object.values(historicalData.deaths) : [],
        borderColor: '#9694ff',
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Number of Cases',
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div className="line-chart">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChart;