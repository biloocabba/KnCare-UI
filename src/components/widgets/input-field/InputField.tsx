import { FormGroup, Input, InputProps } from "reactstrap";

type Props = InputProps & {
  id: string;
  label: string;
};

export const InputField = ({ id, label, ...props }: Props) => {
  console.log("InputField propssss123: ", props);

  return (
    <FormGroup>
      <label className="form-control-label" htmlFor={id}>
        {label}
      </label>
      <Input {...props} placeholder={label} />
    </FormGroup>
  );
};
