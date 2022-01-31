import { Pie } from "react-chartjs-2";

import { ApiResponse, IPieChart, Chart, ThemeColors } from "types";

import { pieDataTemplate, pieOptionsTemplate } from "../templates/Pie.template";

const toPieChartUI = (apiResponse: Chart[]): IPieChart => {
  const genderTemplate = pieDataTemplate({
    label: "Gender",
    backgroundColor: [ThemeColors.theme["danger"], ThemeColors.theme["primary"]],
  });

  apiResponse.forEach(genderRecord => {
    genderTemplate.labels?.push(genderRecord.label);
    genderTemplate.datasets[0].data.push(genderRecord.value);
  });

  return {
    data: genderTemplate,
    options: pieOptionsTemplate,
  };
};

export const renderChart = (response: ApiResponse<Chart[]>): JSX.Element => {
  const chartData = response.data as Chart[]; //necessary for undefined checking in ts
  const pieChart: IPieChart = toPieChartUI(chartData);
  return <Pie data={pieChart.data} options={pieChart.options} className="chart-canvas" />;
};
