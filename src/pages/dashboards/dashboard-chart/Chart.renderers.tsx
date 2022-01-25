import { Alert } from "reactstrap";

import { ApiResponse } from "types";

export const renderAlert = <T,>(response: ApiResponse<T>): JSX.Element => {
  return (
    <Alert className="danger">
      <strong>Error</strong> {response.message}
    </Alert>
  );
};
