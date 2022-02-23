import Select from "react-select";
import makeAnimated from "react-select/animated";
import { StateManagerProps } from "react-select/dist/declarations/src/useStateManager";

import { FormGroup } from "reactstrap";

type Props = StateManagerProps & {
  id: string;
  label: string;
};

export const SelectField = ({ id, label, ...props }: Props) => {
  return (
    <FormGroup>
      <label className="form-control-label" htmlFor={id}>
        {label}
      </label>
      <Select {...props} components={makeAnimated()} />
    </FormGroup>
  );
};
