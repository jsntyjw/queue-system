import * as React from "react";
import {Form} from 'react-lifesg-design-system'

interface Props {
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  error?: string;
}

export const DateInput: React.FunctionComponent<Props> = (props) => {
  return (
    <div className={formatWrapperClass(props)}>
      <label htmlFor={props.name}>{props.label}</label>
      <div className="field">
        <Form.DateInput 
          name={props.name}
          className="form-control"
          value={props.value}
        />
      </div>
      <div className="help-block">{props.error}</div>
    </div>
  )
};

const formatWrapperClass = (props: Props) => {
  const wrapperClass = 'form-group';

  return props.error ?
    `${wrapperClass} has-error` :
    wrapperClass;
};
