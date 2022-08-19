import * as AccordionLib from '@radix-ui/react-accordion';
import Icon from '../icon/icon';

export interface AccordionProps {
  children: React.ReactNode;
}

export function Accordion(props: AccordionProps) {
  const { children } = props;

  return (
    <AccordionLib.Root type="single" className="accordion" collapsible>
      {children}
    </AccordionLib.Root>
  );
}

export default Accordion;
