import { Line } from "react-chartjs-2";

import { ApiResponse, Chart, ILineChart } from "types";

import { workforceTemplate } from "./Workforce.template";

const toWorkforceLineChartUI = (apiResponse: Chart[]): ILineChart => {
  apiResponse.forEach(workforceRecord => {
    workforceTemplate.data.labels = workforceTemplate.data.labels
      ? workforceTemplate.data.labels
      : [];
    workforceTemplate.data.labels.push(workforceRecord.label);
    workforceTemplate.data.datasets[0].data.push(workforceRecord.value);
  });
  return workforceTemplate;
};

export const renderChart = (response: ApiResponse<Chart[]>): JSX.Element => {
  const chartData = response.data as Chart[];
  const chart: ILineChart = toWorkforceLineChartUI(chartData);
  return (
    <Line data={chart.data} options={chart.options} id="chart-workforce" className="chart-canvas" />
  );
};
