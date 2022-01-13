import { FormGroup } from "reactstrap";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export const SelectField = props => {
  let { id, label } = props;

  return (
    <FormGroup>
      <label className="form-control-label" htmlFor={id}>
        {label}
      </label>
        <Select  {...props}  components={makeAnimated()} /> 
    </FormGroup>
  );
};
