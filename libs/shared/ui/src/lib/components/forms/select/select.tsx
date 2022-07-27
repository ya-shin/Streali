import { useState } from 'react';
import ReactSelect, { SingleValue } from 'react-select';
import Label from '../label/label';

export enum SelectState {
  Normal = 'normal',
  Error = 'error',
  Success = 'success',
}

export interface SelectProps {
  options: SingleValue<{ value: string; label: string }>[];
  onChange?: (value: SingleValue<{ value: string; label: string }>) => void;
  placeholder?: string;
  state?: SelectState;
  label?: string;
  labelClassName?: string;
  className?: string;
}

export function Select(props: SelectProps) {
  const {
    options,
    onChange,
    placeholder,
    state = SelectState.Normal,
    label,
    labelClassName = '',
    className = '',
  } = props;

  const [val, setVal] = useState<SingleValue<{
    value: string;
    label: string;
  }> | null>(null);

  const handleChange = (
    value: SingleValue<{ value: string; label: string }>
  ) => {
    setVal(value);
    onChange && onChange(value);
  };

  const hasValueClassName = val ? 'select--has-value' : '';

  const stateClassName = {
    [SelectState.Normal]: '',
    [SelectState.Error]: 'select--error',
    [SelectState.Success]: 'select--success',
  };

  return (
    <label>
      {label && <Label className={labelClassName}>{label}</Label>}
      <ReactSelect
        options={options}
        classNamePrefix="select"
        className={`${hasValueClassName} ${stateClassName[state]} ${className}`}
        onChange={handleChange}
        placeholder={placeholder ? placeholder : 'Select...'}
        data-testid="select"
      />
    </label>
  );
}

export default Select;
