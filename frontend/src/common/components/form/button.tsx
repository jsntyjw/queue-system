import * as React from 'react';
import {Button} from 'react-lifesg-design-system'

interface Props {
  label: string;
  className: string;
  onClick: () => void;
}

export const ButtonSave: React.FunctionComponent<Props> = (props) => {

  return (
    <Button.Default type="button"
      className={props.className}
      onClick={props.onClick}
    >
      {props.label}
    </Button.Default>
  );
};
