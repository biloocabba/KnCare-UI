import { ILineChart } from "types";

export const workforceTemplate: ILineChart = {
  data: {
    labels: [],
    datasets: [
      {
        label: "Members",
        data: [],
        pointRadius: 4,
      },
    ],
  },
  options: {
    plugins: {
      tooltip: {
        intersect: false,
      },
      decimation: {
        enabled: true,
      },
    },
  },
};
