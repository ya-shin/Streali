import React, { useState } from 'react';
import Input from '../input/input';
import Label from '../label/label';

export interface SpacingProps {
  value?: { top?: number; bottom?: number; left?: number; right?: number };
  onValueChange?: (value: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  }) => void;
  label?: string;
  className?: string;
}

export function Spacing(props: SpacingProps) {
  const {
    value = { top: 0, bottom: 0, left: 0, right: 0 },
    onValueChange,
    label,
    className,
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
          <Label className="text-[10px]">Top</Label>
          <Input
            type="number"
            defaultValue={values?.top}
            onChange={(e) => handleChange('top', e)}
          />
        </div>
        <div className="grow">
          <Label className="text-[10px]">Right</Label>
          <Input
            type="number"
            defaultValue={values?.right}
            onChange={(e) => handleChange('right', e)}
          />
        </div>
        <div className="grow">
          <Label className="text-[10px]">Bottom</Label>
          <Input
            type="number"
            defaultValue={values?.bottom}
            onChange={(e) => handleChange('bottom', e)}
          />
        </div>
        <div className="grow">
          <Label className="text-[10px]">Left</Label>
          <Input
            type="number"
            defaultValue={values?.left}
            onChange={(e) => handleChange('left', e)}
          />
        </div>
      </div>
    </div>
  );
}

export default Spacing;
