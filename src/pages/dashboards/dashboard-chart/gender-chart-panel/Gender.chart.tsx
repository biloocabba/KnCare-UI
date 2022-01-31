import { dashboardService } from "redux/features/dashboards";

import { ChartPanel } from "../components";
import { useChart } from "../useChart";

import { renderChart } from "./Gender.renderer";

export const GenderChartPanel = () => {
  const { isLoading, chart, alert } = useChart(
    dashboardService.getDistributionByGenderReport,
    renderChart
  );

  return (
    <ChartPanel
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Composition"
      subTitle="By Gender"
    />
  );
};
