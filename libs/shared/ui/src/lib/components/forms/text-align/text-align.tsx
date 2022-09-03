import { useState } from 'react';
import Icon from '../../icon/icon';
import Label from '../label/label';

export interface TextAlignProps {
  value?: 'left' | 'center' | 'right';
  onValueChange?: (value: 'left' | 'center' | 'right') => void;
  label?: string;
  className?: string;
}

export function TextAlign(props: TextAlignProps) {
  const { value = 'left', onValueChange, label, className } = props;

  const [currentValue, setCurrentValue] = useState(value);

  const handleChange = (value: 'left' | 'center' | 'right') => {
    setCurrentValue(value);
    onValueChange?.(value);
  };

  return (
    <div className={className}>
      {label && <Label>{label}</Label>}
      <div className="h-10 border-2 border-dark-300 rounded-md flex">
        <button
          className={`h-9 grow border-r-2 border-dark-300 flex items-center justify-center ${
            currentValue === 'left' ? 'bg-primary-500' : ''
          }`}
          onClick={() => handleChange('left')}
          type="button"
        >
          <Icon name="align-left" />
        </button>
        <button
          className={`h-9 grow flex items-center justify-center ${
            currentValue === 'center' ? 'bg-primary-500' : ''
          }`}
          onClick={() => handleChange('center')}
          type="button"
        >
          <Icon name="align-center" />
        </button>
        <button
          className={`h-9 grow border-l-2 border-dark-300 flex items-center justify-center ${
            currentValue === 'right' ? 'bg-primary-500' : ''
          }`}
          onClick={() => handleChange('right')}
          type="button"
        >
          <Icon name="align-right" />
        </button>
      </div>
    </div>
  );
}

export default TextAlign;
