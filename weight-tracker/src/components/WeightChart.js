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
import { format } from 'date-fns'; // Importar la función format

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

const WeightChart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => format(new Date(entry.fecha), 'dd/MM/yyyy')),
    datasets: [
      {
        label: 'Weight (kg)',
        data: data.map(entry => entry.peso),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
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
