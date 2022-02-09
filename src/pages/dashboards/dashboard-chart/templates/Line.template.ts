import { ChartData, ChartOptions } from "chart.js";

interface LineDataProps {
  label: string;
}

export const lineDataTemplate = ({ label }: LineDataProps) => {
  return {
    labels: [],
    datasets: [
      {
        label,
        data: [],
        pointRadius: 4,
      },
    ],
  } as ChartData<"line">;
};

export const lineOptionsTemplate: ChartOptions<"line"> = {
  plugins: {
    tooltip: {
      intersect: false,
    },
    decimation: {
      enabled: true,
    },
  },
};
