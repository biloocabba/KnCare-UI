import { dashboardService } from "redux/features/dashboards";

import { ChartPanel } from "../chart-panels";
import { useChart } from "../hooks";

import { renderChart } from "./Seniority.renderer";

export const SeniorityChartPanel = () => {
  const { isLoading, chart, alert } = useChart(
    dashboardService.getDistributionBySeniorityReport,
    renderChart
  );

  return (
    <ChartPanel
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Composition"
      subTitle="By Seniority"
    />
  );
};
