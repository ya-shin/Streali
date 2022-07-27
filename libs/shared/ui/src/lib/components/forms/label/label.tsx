export interface LabelProps {
  children: React.ReactNode;
  className?: string;
}

export function Label(props: LabelProps) {
  const { children, className = '' } = props;

  return (
    <span
      className={`text-xs font-bold block mb-1.5 ${className}`}
      data-testid="label"
    >
      {children}
    </span>
  );
}

export default Label;
