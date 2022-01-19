import { FormGroup } from "reactstrap";

import ReactDatetime from "react-datetime";

export const DateField = props => {
  let { id, label } = props;

  return (
    <FormGroup>
      <label className="form-control-label" htmlFor={id}>
        {label}
      </label>
      <ReactDatetime {...props} />
    </FormGroup>
  );
};
