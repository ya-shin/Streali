import { useState } from 'react';
import ReactSelect, { MultiValue, SingleValue } from 'react-select';
import Label from '../label/label';

export enum SelectState {
  Normal = 'normal',
  Error = 'error',
  Success = 'success',
}

export interface SelectMultipleProps {
  options: SingleValue<{ value: string; label: string }>[];
  onChange?: (
    value: MultiValue<{ value: string; label: string } | null>
  ) => void;
  placeholder?: string;
  state?: SelectState;
  label?: string;
  labelClassName?: string;
  className?: string;
  errorMessage?: string;
  disabled?: boolean;
}

export function SelectMultiple(props: SelectMultipleProps) {
  const {
    options,
    onChange,
    placeholder,
    state = SelectState.Normal,
    label,
    labelClassName = '',
    className = '',
    errorMessage,
    disabled = false,
  } = props;

  const [val, setVal] = useState<MultiValue<{
    value: string;
    label: string;
  } | null> | null>(null);

  const handleChange = (
    value: MultiValue<{ value: string; label: string } | null>
  ) => {
    if (value) {
      setVal(value);
      onChange && onChange(value);
    }
  };

  const hasValueClassName = val ? 'select--has-value' : '';

  const isDisabledClassName = disabled ? 'select--disabled' : '';

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
        className={`select-multiple ${hasValueClassName} ${isDisabledClassName} ${stateClassName[state]} ${className}`}
        onChange={(value) => handleChange(value)}
        placeholder={placeholder ? placeholder : 'Select...'}
        isMulti
        isDisabled={disabled}
      />
      {errorMessage && (
        <span
          className="text-xs text-error-500 mt-1.5"
          data-testid="input-errormessage"
        >
          {errorMessage}
        </span>
      )}
    </label>
  );
}

export default SelectMultiple;
