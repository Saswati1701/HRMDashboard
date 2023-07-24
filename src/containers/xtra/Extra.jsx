import React from 'react'
import './extra.css'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
    },
  },
  responsive: true,
  scales: {
    x: {
      // barPercentage: 0.3,
      stacked: true,
    },
    y: {
      // barPercentage: 0.3,
      stacked: true,
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Applied',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: 'rgb(255, 99, 132)',
    },
    {
      label: 'Shortlisted',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: 'rgb(75, 192, 192)',
    },
    {
      label: 'Rejected',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      backgroundColor: 'rgb(53, 162, 235)',
    },
  ],
};


const Extra = () => {
  return (
    <div className='content'>
      ass
      <div className="chart">
      <Bar options={options} data={data} />
      </div>
        
    </div>
  )
}

export default Extra