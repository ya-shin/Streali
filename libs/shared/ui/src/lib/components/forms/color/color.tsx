import { useState } from 'react';
import Icon from '../../icon/icon';
import { InputState } from '../input/input';
import Label from '../label/label';
export interface ColorProps extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  className?: string;
  labelClassName?: string;
  containerClassName?: string;
  state?: InputState;
  errorMessage?: string;
  value?: string;
  onColorChange?: (value: string) => void;
}

export function Color(props: ColorProps) {
  const {
    label,
    labelClassName = '',
    className = '',
    containerClassName = '',
    state = InputState.Normal,
    errorMessage,
    onColorChange,
    value = '#000000',
    ...inputProps
  } = props;

  const [val, setVal] = useState<string>(value || '#000000');

  const stateClassName = {
    [InputState.Normal]: '',
    [InputState.Error]: '!border-error-500',
    [InputState.Success]: '!border-success-500',
  };

  const haveValueClassName =
    val.length > 0 && state === InputState.Normal ? `!border-primary-300` : '';

  const disabledClassName = inputProps.disabled ? '!bg-dark-400' : '';

  const onChangeValue = (event: React.ChangeEvent) => {
    const { value } = event.target as HTMLInputElement;
    setVal(value);
    onColorChange && onColorChange(value);
  };

  return (
    <label className={containerClassName}>
      {label && <Label className={labelClassName}>{label}</Label>}
      <div
        className={`h-10 w-full border-2 border-dark-300 text-sm text-white flex items-center gap-2 bg-dark-500 rounded-md px-4 outline-none focus:border-primary-300 transition ${stateClassName[state]} ${haveValueClassName} ${disabledClassName} ${className}`}
        data-testid="input"
        type="color"
        {...inputProps}
      >
        <input
          type="color"
          className="hidden"
          value={val}
          onChange={onChangeValue}
        />
        <input
          type="text"
          className="flex grow bg-transparent border-none outline-none"
          value={val}
          onChange={onChangeValue}
        />
        <Icon
          name="sip-line"
          className="text-xl h-5 flex items-center justify-center"
        />
      </div>
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

export default Color;
