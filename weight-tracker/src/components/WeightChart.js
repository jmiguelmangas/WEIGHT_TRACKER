import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { format } from 'date-fns';

// Registrar los componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const WeightChart = ({ data, secondData = [], color = 'rgba(75,192,192,1)', secondColor = 'rgba(255,99,132,1)', firstEntityName, secondEntityName }) => {
  const chartData = {
    labels: data.map(entry => format(new Date(entry.fecha), 'dd/MM/yyyy')),
    datasets: [
      {
        label: `${firstEntityName} Weight (kg)`,
        data: data.map(entry => entry.peso),
        fill: false,
        borderColor: color,
        tension: 0.1
      },
      ...(secondData.length > 0 ? [{
        label: `${secondEntityName} Weight (kg)`,
        data: secondData.map(entry => entry.peso),
        fill: false,
        borderColor: secondColor,
        tension: 0.1
      }] : [])
    ]
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Weight (kg)'
        }
      }
    }
  };

  return <Line data={chartData} options={options} />;
};

export default WeightChart;
