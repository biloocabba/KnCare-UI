import { FormGroup } from "reactstrap";

import Select from "react-select";
import makeAnimated from "react-select/animated";

// import StateManagedSelect from "react-select/dist/declarations/src/stateManager";

// type Props = StateManagedSelect &
//   SingleValueProps &
//   InputProps & {
//     id: string;
//     label: string;
//   };

// @todo find types
type Props = any & {
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
