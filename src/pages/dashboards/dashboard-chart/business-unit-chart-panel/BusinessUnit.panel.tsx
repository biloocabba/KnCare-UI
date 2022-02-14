import { dashboardService } from "redux/features/dashboards";

import { ChartPanel } from "../chart-panels";
import { useChart } from "../hooks";

import { renderChart } from "./BusinessUnit.renderer";

export const BusinessUnitChartPanel = () => {
  const { isLoading, chart, alert } = useChart(
    dashboardService.getDistributionByBusinessUnitReport,
    renderChart
  );

  return (
    <ChartPanel
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Composition"
      subTitle="By Business Unit"
    />
  );
};
