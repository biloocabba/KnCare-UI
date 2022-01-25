import { useEffect, useState } from "react";

import { Card, CardBody, CardHeader, Spinner } from "reactstrap";

import { dashboardService } from "redux/features/dashboards";

import { renderAlert } from "../Chart.renderers";

import { renderChart } from "./Workforce.renderer";

export const WorkforceChartPanel = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [chart, setChart] = useState<JSX.Element>();
  const [alert, setAlert] = useState<JSX.Element>();

  const fetchDataAsync = async () => {
    const httpResponse = await dashboardService.getWorkforceReport();
    if (httpResponse.isError) {
      setAlert(renderAlert(httpResponse));
    } else {
      setChart(renderChart(httpResponse));
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchDataAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <Card>
      <CardHeader>
        <h6 className="surtitle">Composition</h6>
        <h5 className="h3 mb-0">By Role</h5>
      </CardHeader>
      <CardBody>
        <div className="chart">
          {/* {isLoading ? (
            <>
              <Spinner />
            </>
          ) : (
            <Pie
              data={pieMembersByGender.data}
              options={pieMembersByGender.options}
              className="chart-canvas"
              id="chart-pie"
            />
          )} */}
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
