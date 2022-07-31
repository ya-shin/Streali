import { useState } from 'react';
import { Switch as SwitchLib } from '@headlessui/react';
import Label from '../label/label';

export interface SwitchProps {
  checked?: boolean;
  label?: string;
  labelClassName?: string;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export function Switch(props: SwitchProps) {
  const {
    checked = false,
    label,
    labelClassName = '',
    className = '',
    onChange,
  } = props;

  const [enabled, setEnabled] = useState(checked);

  const handleChange = () => {
    if (onChange) {
      onChange(checked);
    }
    setEnabled(!enabled);
  };

  return (
    <div className="flex items-center gap-3" onClick={handleChange}>
      <SwitchLib
        checked={enabled}
        onChange={setEnabled}
        className={`${enabled ? 'bg-primary-500' : 'bg-dark-300'}
            relative inline-flex h-6 w-10 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-primary-300 focus-visible:ring-opacity-100 p-0.5 ${className}`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-full' : 'translate-x-0'}
              pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </SwitchLib>
      {label && (
        <Label className={`!text-sm font-normal !mb-0 ${labelClassName}`}>
          {label}
        </Label>
      )}
    </div>
  );
}

export default Switch;
