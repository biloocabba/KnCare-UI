import { ChartData, ChartOptions } from "chart.js";

interface Bar {
  label: string;
  backgroundColor: string;
}

interface Props {
  bars: Bar[];
}

export const barDataTemplate = ({ bars }: Props) => {
  const datasets = bars.map(bar => ({
    label: bar.label,
    data: [],
    backgroundColor: bar.backgroundColor,
    maxBarThickness: 10,
  }));

  return {
    labels: [],
    datasets,
  } as ChartData<"bar">;
};

export const barOptionsTemplate: ChartOptions<"bar"> = {
  plugins: {
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
};

export const multiBarOptionsTemplate: ChartOptions<"bar"> = {
  plugins: {
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};
