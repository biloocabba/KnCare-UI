import { ErrorAlert } from "components/alerts";

import { useAlert } from "context";

export const useFireAlert = () => {
  const { alert, setAlert } = useAlert();

  const fireAlert = (message = "Feature under development") => {
    setAlert(() => <ErrorAlert>{message}</ErrorAlert>);
  };

  return { alert, fireAlert };
};
