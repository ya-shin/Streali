import { useGoogleFonts } from '@streali/shared/hooks';
import Select from '../select/select';

export interface FontSelectProps {
  label?: string;
  className?: string;
  value?: string;
}

export function FontSelect(props: FontSelectProps) {
  const { label, className = '', ...otherProps } = props;

  const { data: fonts } = useGoogleFonts();

  return (
    <Select
      options={fonts.map((font) => {
        return { label: font.family, value: font.family };
      })}
      label={label}
      className={className}
      placeholder="Choose a font..."
      {...otherProps}
    />
  );
}

export default FontSelect;
