import { dashboardService } from "redux/features/dashboards";

import { ChartPanel } from "../components";
import { useChart } from "../useChart";

import { renderChart } from "./Workforce.renderer";

export const WorkforceChartPanel = () => {
  const { isLoading, chart, alert } = useChart(dashboardService.getWorkforceReport, renderChart);

  return (
    <ChartPanel
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Composition"
      subTitle="By Role"
    />
  );
};
