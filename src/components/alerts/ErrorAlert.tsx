import SweetAlert from "react-bootstrap-sweetalert";

import { useAlert } from "context";

interface Props {
  children: string;
}

export const ErrorAlert = ({ children }: Props) => {
  const { setAlert } = useAlert();
  return (
    <SweetAlert error title="Error" onConfirm={() => setAlert(null)}>
      {children}
    </SweetAlert>
  );
};
