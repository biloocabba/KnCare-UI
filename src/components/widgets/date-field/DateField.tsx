import moment, { Moment } from "moment";
import { Dispatch, SetStateAction } from "react";
import ReactDatetime from "react-datetime";

import { FormGroup } from "reactstrap";

import { formatMomentAsDD_MM_YYYY } from "types";

type Props = ReactDatetime.DatetimepickerProps & {
  id: string;
  label: string;
  value: Moment | undefined;
  setValue: Dispatch<SetStateAction<Moment | undefined>>;
};

export const DateField = ({ id, label, value, setValue, ...props }: Props) => {
  return (
    <FormGroup>
      <label className="form-control-label" htmlFor={id}>
        {label}
      </label>
      <ReactDatetime
        {...props}
        timeFormat={false}
        closeOnSelect
        value={value ? formatMomentAsDD_MM_YYYY(value) : ""}
        renderInput={props => {
          return <input {...props} value={value ? formatMomentAsDD_MM_YYYY(value) : ""} />;
        }}
        onChange={dateAsMoment => {
          const selectedDate =
            typeof dateAsMoment === "string" ? moment(dateAsMoment) : dateAsMoment;
          setValue(selectedDate);
        }}
      />
    </FormGroup>
  );
};
