import { useEffect, useState } from "react";

import { ApiResponse } from "types";

import { renderAlert } from "../Chart.renderers";

interface ApiCallFunction<T> {
  (): Promise<ApiResponse<T>>;
}

interface RenderChartFunction<T> {
  (response: ApiResponse<T>): JSX.Element;
}

export const useChart = <T>(
  asyncFunction: ApiCallFunction<T>,
  renderChart: RenderChartFunction<T>
) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [chart, setChart] = useState<JSX.Element>();
  const [alert, setAlert] = useState<JSX.Element>();

  const fetchDataAsync = async () => {
    const httpResponse = await asyncFunction();
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

  return { isLoading, chart, alert };
};
