import moment, { Moment } from "moment";
import { Dispatch, SetStateAction } from "react";
import ReactDatetime from "react-datetime";

import { FormGroup } from "reactstrap";

import { DATE_FILTER_FORMAT } from "variables/app.consts";

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
        dateFormat={DATE_FILTER_FORMAT}
        closeOnSelect
        value={value ? moment(value).format(DATE_FILTER_FORMAT) : ""}
        renderInput={props => {
          return <input {...props} value={value ? moment(value).format(DATE_FILTER_FORMAT) : ""} />;
        }}
        onChange={dateAsMoment => {
          setValue(moment(dateAsMoment));
        }}
      />
    </FormGroup>
  );
};
