import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DynamicChartProps {
  plotData: any;
}

const DynamicChart: React.FC<DynamicChartProps> = ({ plotData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: plotData.title || "Chart",
      },
    },
  };

  const data = {
    labels: plotData.x,
    datasets: [
      {
        label: plotData.name || "Dataset",
        data: plotData.y,
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default DynamicChart;
