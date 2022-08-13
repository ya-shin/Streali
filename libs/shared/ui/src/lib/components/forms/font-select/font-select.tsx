import { useGoogleFonts } from '@streali/shared/hooks';
import { SingleValue } from 'react-select';
import Select from '../select/select';

export interface FontSelectProps {
  label?: string;
  className?: string;
  value?: string;
  defaultValue?: { value: string; label: string };
  onChange?: (value: SingleValue<{ value: string; label: string }>) => void;
  disabled?: boolean;
}

export function FontSelect(props: FontSelectProps) {
  const {
    label,
    className = '',
    defaultValue = { label: 'Roboto', value: 'Roboto' },
    disabled,
    onChange,
  } = props;

  const { data: fonts } = useGoogleFonts();

  return (
    <Select
      options={fonts.map((font) => {
        return { label: font.family, value: font.family };
      })}
      label={label}
      className={className}
      placeholder="Choose a font..."
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={onChange}
    />
  );
}

export default FontSelect;
