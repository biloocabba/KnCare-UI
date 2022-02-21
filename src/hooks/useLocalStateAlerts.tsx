import { useEffect, useState } from "react";

import { ErrorAlert, SuccessAlert } from "components/alerts";

import { useAlert } from "context";

export const useLocalStateAlerts = (changedState: any) => {
  const { alert, setAlert } = useAlert();
  // const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);
  const [saveSent, setSaveSent] = useState(false);
  const [successMessage, setSuccessMessage] = useState("Success");
  const [errorMessage, setErrorMessage] = useState("Error");

  useEffect(() => {
    if (isSuccess && saveSent) {
      setAlert(() => <SuccessAlert>{successMessage}</SuccessAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changedState]);

  useEffect(() => {
    if (!isSuccess && saveSent) {
      setAlert(() => <ErrorAlert>{errorMessage}</ErrorAlert>);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changedState]);

  return { alert, setSaveSent, setSuccessMessage, setErrorMessage, setIsSuccess };
};
