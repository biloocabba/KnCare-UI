import SweetAlert from "react-bootstrap-sweetalert";

import { useAlert } from "context";

interface Props {
  children: string;
}

export const SuccessAlert = ({ children }: Props) => {
  const { setAlert } = useAlert();
  return (
    <SweetAlert success title="Success" onConfirm={() => setAlert(null)}>
      {children}
    </SweetAlert>
  );
};
