import { Pie } from "react-chartjs-2";

import { ApiResponse, IPieChart, Chart, ThemeColors } from "types";

import { pieDataTemplate, pieOptionsTemplate } from "../templates/Pie.template";

const toPieChartUI = (apiResponse: Chart[]): IPieChart => {
  const template = pieDataTemplate({
    label: "Role",
    backgroundColor: [
      ThemeColors.theme["primary"],
      ThemeColors.theme["info"],
      ThemeColors.theme["success"],
      ThemeColors.theme["danger"],
      ThemeColors.theme["neutral4"],
    ],
  });

  apiResponse.forEach(genderRecord => {
    template.labels?.push(genderRecord.label);
    template.datasets[0].data.push(genderRecord.value);
  });

  return {
    data: template,
    options: pieOptionsTemplate,
  };
};

export const renderChart = (response: ApiResponse<Chart[]>): JSX.Element => {
  const chartData = response.data as Chart[]; //necessary for undefined checking in ts
  const pieChart: IPieChart = toPieChartUI(chartData);
  return <Pie data={pieChart.data} options={pieChart.options} className="chart-canvas" />;
};
