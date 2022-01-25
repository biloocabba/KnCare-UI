import { Bar } from "react-chartjs-2";

import { ApiResponse, IBarChart, TurnoverChart } from "types";

import { optionsTemplate, templateTurnoverBarChart } from "./Turnover.template";

export const toTurnoverBarChartUI = (apiResponse: TurnoverChart[]): IBarChart => {
  apiResponse.forEach(turnOverRecord => {
    templateTurnoverBarChart.labels = templateTurnoverBarChart.labels
      ? templateTurnoverBarChart.labels
      : [];
    templateTurnoverBarChart.labels.push(turnOverRecord.month);
    templateTurnoverBarChart.datasets[0].data.push(turnOverRecord.onboarded);
    templateTurnoverBarChart.datasets[1].data.push(turnOverRecord.offboarded);
  });

  return {
    data: templateTurnoverBarChart,
    options: optionsTemplate,
  };
};

export const renderChart = (response: ApiResponse<TurnoverChart[]>): JSX.Element => {
  const chartData = response.data as TurnoverChart[]; //necessary for undefined checking in ts
  const barChart: IBarChart = toTurnoverBarChartUI(chartData);
  return <Bar data={barChart.data} options={barChart.options} className="chart-canvas" />;
};
