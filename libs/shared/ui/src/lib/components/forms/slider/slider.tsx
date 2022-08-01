import * as SliderLib from '@radix-ui/react-slider';
import Label from '../label/label';

/* eslint-disable-next-line */
export interface SliderProps {
  value?: number[];
  min?: number;
  max: number;
  step?: number;
  label?: string;
  labelClassName?: string;
  disabled?: boolean;
}

export function Slider(props: SliderProps) {
  const {
    value = [0],
    min,
    max,
    step = 1,
    label,
    labelClassName,
    disabled = false,
  } = props;

  return (
    <div>
      {label && <Label className={`mb-3 ${labelClassName}`}>{label}</Label>}
      <SliderLib.Root
        defaultValue={value}
        min={min}
        max={max}
        step={step}
        className="relative flex items-center w-full"
        disabled={disabled}
      >
        <SliderLib.Track className="bg-dark-300 grow rounded-full h-1">
          <SliderLib.Range
            className={`absolute rounded-full h-full ${
              disabled ? 'bg-dark-300' : 'bg-primary-300'
            }`}
          />
        </SliderLib.Track>
        <SliderLib.Thumb
          className={`block w-4 h-4 rounded-full focus:outline-2 focus:outline-offset-2 focus:outline-primary-300 outline-none ${
            disabled ? 'bg-dark-300' : 'bg-primary-300'
          }`}
        />
      </SliderLib.Root>
    </div>
  );
}

export default Slider;
