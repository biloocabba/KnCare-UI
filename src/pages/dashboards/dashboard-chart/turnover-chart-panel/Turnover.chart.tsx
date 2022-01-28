import { TurnoverChart } from "types";

import { dashboardService } from "redux/features/dashboards";

import { ChartCard } from "../components";
import { useChart } from "../useChart";

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
    <ChartCard
      alert={alert}
      chart={chart}
      isLoading={isLoading}
      title="Care Members"
      subTitle="Onboarded/Offboarded"
    />
  );
};
