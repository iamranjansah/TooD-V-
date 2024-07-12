import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend,
  plugins,
} from 'chart.js';
import { Line, Doughnut } from 'react-chartjs-2';
import { background, position } from '@chakra-ui/react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  ArcElement,
  Legend
);

export const LineChart = () => {
  const labels = ['abc', 'abc2', 'abc3', 'abc4'];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'buttom',
      },
      title: {
        display: true,
        text: 'Yearly Views',
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: 'View',
        data: [1, 2, 3, 4],
        borderColor:"rgba(107, 70, 193,0.5)",
        backgroundColor:"#6b46c1"
      },
    ],
  };
  return <Line options={options} data={data} />;
};
