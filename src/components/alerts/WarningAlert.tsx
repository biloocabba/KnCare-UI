import SweetAlert from "react-bootstrap-sweetalert";

import { useAlert } from "context";

interface Props {
  children: string;
}

export const WarningAlert = ({ children }: Props) => {
  const { setAlert } = useAlert();
  return (
    <SweetAlert warning title="Attention" onConfirm={() => setAlert(null)}>
      {children}
    </SweetAlert>
  );
};
