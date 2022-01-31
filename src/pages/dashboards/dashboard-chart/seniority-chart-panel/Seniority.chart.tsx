import { dashboardService } from "redux/features/dashboards";

import { ChartPanel } from "../components";
import { useChart } from "../useChart";

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
