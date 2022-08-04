import * as AccordionLib from '@radix-ui/react-accordion';
import Icon from '../icon/icon';

export interface AccordionProps {
  content: { title: string; content: React.ReactNode; disabled?: boolean }[];
}

export function Accordion(props: AccordionProps) {
  const { content } = props;

  return (
    <AccordionLib.Root type="single" className="accordion" collapsible>
      {content.map(({ title, content, disabled }) => (
        <AccordionLib.Item
          value={title}
          key={title}
          className="accordion--item"
          disabled={disabled}
        >
          <AccordionLib.Header>
            <AccordionLib.Trigger
              className={`accordion--trigger w-full h-10 bg-dark-400 px-4 font-bold rounded-md mb-1 flex items-center justify-between transition-colors duration-300 ${
                disabled ? 'text-dark-100' : ''
              }`}
            >
              {title}
              {!disabled && (
                <Icon
                  name="arrow-down-s-line"
                  className="accordion--arrow transition-transform duration-300"
                />
              )}
            </AccordionLib.Trigger>
          </AccordionLib.Header>
          <AccordionLib.Content className="accordion--content">
            <div className="p-4 border-2 border-dark-300 rounded-md mb-1">
              {content}
            </div>
          </AccordionLib.Content>
        </AccordionLib.Item>
      ))}
    </AccordionLib.Root>
  );
}

export default Accordion;
