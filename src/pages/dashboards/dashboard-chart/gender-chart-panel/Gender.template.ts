import { ChartData, ChartOptions } from "chart.js";

import { ThemeColors } from "types";

export const genderTemplate: ChartData<"pie"> = {
  labels: [],
  datasets: [
    {
      label: "Gender",
      data: [],
      backgroundColor: [ThemeColors.theme["danger"], ThemeColors.theme["primary"]],
    },
  ],
} as ChartData<"pie">;

export const optionsTemplate: ChartOptions<"pie"> = {
  plugins: {
    legend: {
      position: "top",
    },
  },
  animation: {
    animateScale: true,
  },
};
