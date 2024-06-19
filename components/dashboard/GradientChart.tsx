import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
interface DataPoint {
   
    datapoint: number[];
  }
  const GradientChart: React.FC<DataPoint> = ({ datapoint }) =>  {
  const canvasRef = React.useRef(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October'],
    datasets: [
      {
        label: 'My Dataset',
        data: datapoint,
        fill: true,
        backgroundColor: (context: { chart: any; }) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This case happens on initial chart load
            return null;
          }

          const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
          gradient.addColorStop(0, 'rgba(173, 255, 47, 0.2)');  // Very light green
          gradient.addColorStop(1, 'rgba(144, 238, 144, 1)');  // Light green
          return gradient;
        },
        borderColor: 'rgba(144, 238, 144, 1)',  // Light green
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line ref={canvasRef} data={data} options={options} />;
};

export default GradientChart;
