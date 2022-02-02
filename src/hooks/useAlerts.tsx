import { useEffect, useState } from "react";

import { ErrorAlert, SuccessAlert } from "components/alerts";

import { useAlert } from "context";
import { Domain } from "types";

import { StateType } from "redux/features";

export const useAlerts = (state: StateType<Domain>) => {
  // @todo decide if we want to use the alert context or just use the state
  // if we use the state we have to pass the setAlert as a prop for alerts
  const { alert, setAlert } = useAlert();
  // const [alert, setAlert] = useState<AlertType>(null);
  const [saveSent, setSaveSent] = useState(false);

  useEffect(() => {
    if (state.entity && saveSent) {
      setAlert(() => <SuccessAlert>Group Created</SuccessAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.entity]);

  useEffect(() => {
    if (state.error && saveSent) {
      setAlert(() => <ErrorAlert>{state.error.message || "Error"}</ErrorAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.error]);

  return { alert, setSaveSent };
};
