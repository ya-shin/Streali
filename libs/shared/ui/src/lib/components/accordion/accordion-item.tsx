import * as AccordionLib from '@radix-ui/react-accordion';
import Icon from '../icon/icon';

export interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
}

function AccordionItem(props: AccordionItemProps) {
  const { title, children, disabled } = props;

  return (
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
          {children}
        </div>
      </AccordionLib.Content>
    </AccordionLib.Item>
  );
}

export default AccordionItem;
