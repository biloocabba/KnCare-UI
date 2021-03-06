import { dashboardService } from "redux/features/dashboards";

import { TurnoverChart } from "types";

import { ChartPanel } from "../chart-panels";
import { useChart } from "../hooks";

import { renderChart } from "./Turnover.renderer";

// interface onSaveFunction {
//   (careMemberRequest: CareMemberSaveRequest): void;
// }

export const TurnoverChartPanel = () => {
  const { isLoading, chart, alert } = useChart<TurnoverChart[]>(
    dashboardService.getTurnoverReport,
    renderChart
  );
  return (
    <ChartPanel
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Care Members"
      subTitle="Onboarded/Offboarded"
    />
  );
};
