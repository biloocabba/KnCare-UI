import { Card, CardHeader, CardBody, Spinner } from "reactstrap";

interface Props {
  isLoading: boolean;
  chart: JSX.Element | undefined;
  alert: JSX.Element | undefined;
  title: string;
  subTitle: string;
}

export const ChartCard = ({ isLoading, chart, alert, title, subTitle }: Props) => {
  return (
    <Card>
      <CardHeader>
        <h6 className="surtitle">{title}</h6>
        <h5 className="h3 mb-0">{subTitle}</h5>
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
