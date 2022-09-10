import React, { useState } from 'react';
import Input from '../input/input';
import Label from '../label/label';

interface SpacingValue {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

interface Radius {
  topLeft?: number;
  topRight?: number;
  bottomRight?: number;
  bottomLeft?: number;
}

export interface SpacingProps {
  value?: SpacingValue & Radius;
  onValueChange?: (value: SpacingValue | Radius) => void;
  label?: string;
  className?: string;
  type?: 'spacing' | 'radius';
}

export function Spacing(props: SpacingProps) {
  const {
    value = { top: 0, bottom: 0, left: 0, right: 0 },
    onValueChange,
    label,
    className,
    type = 'spacing',
  } = props;

  const [values, setValues] = useState(value);

  const handleChange = (position: string, event: React.ChangeEvent) => {
    const val = (event.target as HTMLInputElement).value;
    const newValues = { ...values, [position]: val };
    setValues(newValues);
    onValueChange?.(newValues);
  };

  return (
    <div className={className}>
      {label && <Label>{label}</Label>}
      <div className="flex w-full gap-2">
        <div className="grow">
          <Label className="text-[10px]">
            {type === 'spacing' ? 'Top' : 'Top left'}
          </Label>
          <Input
            type="number"
            defaultValue={values.top || values.topLeft}
            onChange={(e) =>
              handleChange(type === 'spacing' ? 'top' : 'topLeft', e)
            }
          />
        </div>
        <div className="grow">
          <Label className="text-[10px]">
            {type === 'spacing' ? 'Right' : 'Top right'}
          </Label>
          <Input
            type="number"
            defaultValue={values.right || values.topRight}
            onChange={(e) =>
              handleChange(type === 'spacing' ? 'right' : 'topRight', e)
            }
          />
        </div>
        <div className="grow">
          <Label className="text-[10px]">
            {type === 'spacing' ? 'Bottom' : 'Bottom right'}
          </Label>
          <Input
            type="number"
            defaultValue={values?.bottom || values.bottomRight}
            onChange={(e) =>
              handleChange(type === 'spacing' ? 'bottom' : 'bottomRight', e)
            }
          />
        </div>
        <div className="grow">
          <Label className="text-[10px]">
            {type === 'spacing' ? 'Left' : 'Bottom left'}
          </Label>
          <Input
            type="number"
            defaultValue={values?.left || values.bottomLeft}
            onChange={(e) =>
              handleChange(type === 'spacing' ? 'left' : 'bottomLeft', e)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Spacing;
