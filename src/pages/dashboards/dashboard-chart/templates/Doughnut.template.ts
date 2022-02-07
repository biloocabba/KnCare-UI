import { ChartData, ChartOptions } from "chart.js";

interface DoughnutDataProps {
  label: string;
  backgroundColor: string[];
}

export const doughnutDataTemplate = ({ label, backgroundColor }: DoughnutDataProps) => {
  return {
    labels: [],
    datasets: [
      {
        label,
        data: [],
        backgroundColor,
      },
    ],
  } as ChartData<"doughnut">;
};

export const doughnutOptionsTemplate: ChartOptions<"doughnut"> = {
  plugins: {
    legend: {
      position: "top",
    },
  },
  animation: {
    animateScale: true,
  },
  cutout: 100,
};
