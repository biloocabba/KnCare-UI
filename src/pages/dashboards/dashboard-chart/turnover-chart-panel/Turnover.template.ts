import { ChartData, ChartOptions } from "chart.js";

import { ThemeColors } from "types";

export const templateTurnoverBarChart: ChartData<"bar"> = {
  labels: [],
  datasets: [
    {
      label: "Onboarded",
      backgroundColor: ThemeColors.theme["success"],
      maxBarThickness: 10,
      data: [],
    },
    {
      label: "Offboarded",
      backgroundColor: ThemeColors.theme["danger"],
      maxBarThickness: 10,
      data: [],
    },
  ],
} as ChartData<"bar">;

export const optionsTemplate: ChartOptions<"bar"> = {
  plugins: {
    tooltip: {
      mode: "index",
      intersect: false,
    },
  },
};
