import { useGoogleFonts } from '@streali/shared/hooks';
import { SingleValue } from 'react-select';
import Select from '../select/select';

export interface FontSelectProps {
  label?: string;
  className?: string;
  value?: string;
  defaultValue?: { value: string; label: string };
  onChange?: (fontName: string, variants: string[]) => void;
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

  function handleChange(value: SingleValue<{ value: string; label: string }>) {
    const font = fonts?.find((f) => f.family === value?.value);
    const variants = font?.variants.filter((v) => !v.includes('italic'));

    if (font) {
      onChange && onChange(font.family, variants ? variants : []);
    }
  }

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
      onChange={handleChange}
    />
  );
}

export default FontSelect;
