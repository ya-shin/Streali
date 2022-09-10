import { useGoogleFonts } from '@streali/shared/hooks';
import { SingleValue } from 'react-select';
import Select from '../select/select';

export interface fontVariants {
  label: string;
  value: string;
}

export interface FontSelectProps {
  label?: string;
  className?: string;
  value?: string;
  defaultValue?: { value: string; label: string };
  onChange?: (fontName: string, variants: fontVariants[]) => void;
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

  const convertFontWeight = (weight: string) => {
    switch (weight) {
      case '100':
        return 'Thin';
      case '200':
        return 'Extra Light';
      case '300':
        return 'Light';
      case '400':
        return 'Regular';
      case '500':
        return 'Medium';
      case '600':
        return 'Semi Bold';
      case '700':
        return 'Bold';
      case '800':
        return 'Extra Bold';
      case '900':
        return 'Black';
      default:
        return weight;
    }
  };

  function handleChange(value: SingleValue<{ value: string; label: string }>) {
    const font = fonts?.find((f) => f.family === value?.value);
    const variants = font?.variants.filter((v) => !v.includes('italic'));

    if (font) {
      onChange &&
        onChange(
          font.family,
          variants
            ? variants?.map((v) => ({ label: convertFontWeight(v), value: v }))
            : []
        );
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
