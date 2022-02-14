import { Line } from "react-chartjs-2";

import { ApiResponse, Chart, ILineChart } from "types";

import { lineDataTemplate, lineOptionsTemplate } from "..";

const toWorkforceLineChartUI = (apiResponse: Chart[]): ILineChart => {
  const template = lineDataTemplate({ label: "Members" });
  apiResponse.forEach(workforceRecord => {
    template.labels = template.labels ? template.labels : [];
    template.labels.push(workforceRecord.label);
    template.datasets[0].data.push(workforceRecord.value);
  });
  return {
    data: template,
    options: lineOptionsTemplate,
  };
};

export const renderChart = (response: ApiResponse<Chart[]>): JSX.Element => {
  const chartData = response.data as Chart[];
  const chart: ILineChart = toWorkforceLineChartUI(chartData);
  return (
    <Line data={chart.data} options={chart.options} id="chart-workforce" className="chart-canvas" />
  );
};
