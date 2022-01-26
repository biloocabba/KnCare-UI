import { Card, CardBody, CardHeader, Spinner } from "reactstrap";

import { dashboardService } from "redux/features/dashboards";

import { useChart } from "../useChart";

import { renderChart } from "./Workforce.renderer";

export const WorkforceChartPanel = () => {
  const { isLoading, chart, alert } = useChart(dashboardService.getWorkforceReport, renderChart);

  return (
    <Card>
      <CardHeader>
        <h6 className="surtitle">Composition</h6>
        <h5 className="h3 mb-0">By Role</h5>
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
