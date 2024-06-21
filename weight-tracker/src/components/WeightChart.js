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
import './WeightChart.css';  // Importar el CSS

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
  // Verificar si el tema es oscuro
  const isDarkMode = document.documentElement.classList.contains('dark');
  
  // Definir colores basados en el tema
  const textColor = isDarkMode ? 'var(--line-color-light)' : 'var(--line-color-dark)';
  const borderColor = isDarkMode ? 'var(--input-border-color)' : 'var(--input-border-color)';

  const chartData = {
    labels: data.map(entry => format(new Date(entry.fecha), 'dd/MM/yyyy')),
    datasets: [
      {
        label: `${firstEntityName} Weight (kg)`,
        data: data.map(entry => entry.peso),
        fill: false,
        borderColor: color,
        tension: 0.1,
        pointBackgroundColor: color,
      },
      ...(secondData.length > 0 ? [{
        label: `${secondEntityName} Weight (kg)`,
        data: secondData.map(entry => entry.peso),
        fill: false,
        borderColor: secondColor,
        tension: 0.1,
        pointBackgroundColor: secondColor,
      }] : [])
    ]
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date',
          color: textColor,  // Usar color del texto basado en el tema
        },
        ticks: {
          color: textColor,  // Usar color del texto basado en el tema
        },
        grid: {
          color: borderColor,  // Usar color del borde basado en el tema
        },
      },
      y: {
        title: {
          display: true,
          text: 'Weight (kg)',
          color: textColor,  // Usar color del texto basado en el tema
        },
        ticks: {
          color: textColor,  // Usar color del texto basado en el tema
        },
        grid: {
          color: borderColor,  // Usar color del borde basado en el tema
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: textColor,  // Usar color del texto basado en el tema
        },
      },
    },
  };

  return <div className="weight-chart"><Line data={chartData} options={options} /></div>;
};

export default WeightChart;
