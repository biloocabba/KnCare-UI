import { Pie } from "react-chartjs-2";

import { ApiResponse, IPieChart, Chart } from "types";

import { optionsTemplate, genderTemplate } from "./Gender.template";

const toPieChartUI = (apiResponse: Chart[]): IPieChart => {
  apiResponse.forEach(genderRecord => {
    console.log("genderREcord", genderRecord);

    genderTemplate.datasets[0].data.push(genderRecord.value);
  });

  return {
    data: genderTemplate,
    options: optionsTemplate,
  };
};

export const renderChart = (response: ApiResponse<Chart[]>): JSX.Element => {
  const chartData = response.data as Chart[]; //necessary for undefined checking in ts
  const pieChart: IPieChart = toPieChartUI(chartData);
  return <Pie data={pieChart.data} options={pieChart.options} className="chart-canvas" />;
};
