// interface onSaveFunction {
//   (careMemberRequest: CareMemberSaveRequest): void;
// }

import { Spinner, Card, CardHeader, CardBody } from "reactstrap";

import { TurnoverChart } from "types";

import { dashboardService } from "redux/features/dashboards";

import { useChart } from "../useChart";

import { renderChart } from "./Turnover.renderer";

export const TurnoverChartPanel = () => {
  const { isLoading, chart, alert } = useChart<TurnoverChart[]>(
    dashboardService.getTurnoverReport,
    renderChart
  );

  return (
    <Card>
      <CardHeader>
        <h6 className="surtitle">Care Members</h6>
        <h5 className="h3 mb-0">Onboarded/Offboarded</h5>
      </CardHeader>
      <CardBody>
        <div className="chart">
          {isLoading ? (
            <>
              <Spinner />
            </>
          ) : chart ? (
            chart
          ) : (
            alert
          )}
        </div>
      </CardBody>
    </Card>
  );
};
