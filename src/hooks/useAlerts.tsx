import { useEffect, useState } from "react";

import { ErrorAlert, SuccessAlert } from "components/alerts";

import { useAlert } from "context";
import { Domain } from "types";

import { StateType } from "redux/features";

export const useAlerts = (state: StateType<Domain>) => {
  const { alert, setAlert } = useAlert();
  const [saveSent, setSaveSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (state.entity && saveSent) {
      setAlert(() => <SuccessAlert>{successMessage}</SuccessAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.entity]);

  useEffect(() => {
    if (state.error && saveSent) {
      setAlert(() => <ErrorAlert>{state.error.message || "Error"}</ErrorAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.error]);

  return { alert, setSaveSent, setSuccessMessage };
};
