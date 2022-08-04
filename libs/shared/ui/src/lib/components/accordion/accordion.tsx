import * as AccordionLib from '@radix-ui/react-accordion';

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
            </AccordionLib.Trigger>
          </AccordionLib.Header>
          <AccordionLib.Content className="accordion--content p-4 border-2 border-dark-300 rounded-md mb-3 overflow-hidden">
            {content}
          </AccordionLib.Content>
        </AccordionLib.Item>
      ))}
    </AccordionLib.Root>
  );
}

export default Accordion;
