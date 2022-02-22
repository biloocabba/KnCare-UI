import ReactDatetime from "react-datetime";

import { FormGroup } from "reactstrap";

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
