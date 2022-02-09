import { Bar } from "react-chartjs-2";

import { ApiResponse, IBarChart, TurnoverChart, ThemeColors } from "types";

import { barDataTemplate, barOptionsTemplate } from "..";

export const toTurnoverBarChartUI = (apiResponse: TurnoverChart[]): IBarChart => {
  const template = barDataTemplate({
    bars: [
      { label: "Onboarded", backgroundColor: ThemeColors.theme["success"] },
      { label: "Offboarded", backgroundColor: ThemeColors.theme["danger"] },
    ],
  });
  apiResponse.forEach(turnOverRecord => {
    template.labels = template.labels ? template.labels : [];
    template.labels.push(turnOverRecord.month);
    template.datasets[0].data.push(turnOverRecord.onboarded);
    template.datasets[1].data.push(turnOverRecord.offboarded);
  });

  return {
    data: template,
    options: barOptionsTemplate,
  };
};

export const renderChart = (response: ApiResponse<TurnoverChart[]>): JSX.Element => {
  const chartData = response.data as TurnoverChart[]; //necessary for undefined checking in ts
  const barChart: IBarChart = toTurnoverBarChartUI(chartData);
  return <Bar data={barChart.data} options={barChart.options} className="chart-canvas" />;
};
