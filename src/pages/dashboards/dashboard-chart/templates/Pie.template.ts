import { ChartData, ChartOptions } from "chart.js";

interface PieDataProps {
  label: string;
  backgroundColor: string[];
}

export const pieDataTemplate = ({ label, backgroundColor }: PieDataProps) => {
  return {
    labels: [],
    datasets: [
      {
        label,
        data: [],
        backgroundColor,
      },
    ],
  } as ChartData<"pie">;
};

export const pieOptionsTemplate: ChartOptions<"pie"> = {
  plugins: {
    legend: {
      position: "top",
    },
  },
  animation: {
    animateScale: true,
  },
};
