import { FormGroup } from "reactstrap";

import ReactDatetime from "react-datetime";

type Props = ReactDatetime.DatetimepickerProps & {
  id: string;
  label: string;
};

export const DateField = ({ id, label, ...props }: Props) => {
  return (
    <FormGroup>
      <label className="form-control-label" htmlFor={id}>
        {label}
      </label>
      <ReactDatetime {...props} timeFormat={false} closeOnSelect />
    </FormGroup>
  );
};
