// interface onSaveFunction {
//   (careMemberRequest: CareMemberSaveRequest): void;
// }

import { useEffect, useState } from "react";

import { Spinner, Card, CardHeader, CardBody } from "reactstrap";

import { dashboardService } from "redux/features/dashboards";

import { renderAlert } from "../Chart.renderers";

import { renderChart } from "./Turnover.renderer";

export const TurnoverChartPanel = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [chart, setChart] = useState<JSX.Element>();
  const [alert, setAlert] = useState<JSX.Element>();

  const fetchDataAsync = async () => {
    const httpResponse = await dashboardService.getTurnoverReport();
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
