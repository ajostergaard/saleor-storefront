import * as React from "react";
import Select from "react-select";

import "./scss/index.scss";

interface SelectFieldProps {
  label?: string;
}

const SelectField: React.SFC<SelectFieldProps | any> = ({
  label = "",
  ...rest
}) => (
  <div className="react-select-wrapper">
    {label ? <span className="input__label">{label}</span> : null}
    <Select classNamePrefix="react-select" {...rest} />
  </div>
);

export default SelectField;
