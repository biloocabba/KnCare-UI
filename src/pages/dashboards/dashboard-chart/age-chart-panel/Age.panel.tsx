import { dashboardService } from "redux/features/dashboards";

import { ChartPanel } from "../chart-panels";
import { useChart } from "../hooks";

import { renderChart } from "./Age.renderer";

export const AgeChartPanel = () => {
  const { isLoading, chart, alert } = useChart(
    dashboardService.getDistributionByAgeReport,
    renderChart
  );

  return (
    <ChartPanel
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Composition"
      subTitle="By Age"
    />
  );
};
