import * as TabsLib from '@radix-ui/react-tabs';
import Button, { ButtonSize } from '../button/button';

export interface TabsProps {
  content: { title: string; content: React.ReactNode; disabled?: boolean }[];
}

export function Tabs(props: TabsProps) {
  const { content } = props;

  return (
    <TabsLib.Root defaultValue="tab-0">
      <TabsLib.List className="flex gap-2 mb-3">
        {content.map(({ title, disabled }, index) => (
          <TabsLib.Trigger value={'tab-' + index} disabled={disabled}>
            <Button size={ButtonSize.Small} disabled={disabled}>
              {title}
            </Button>
          </TabsLib.Trigger>
        ))}
      </TabsLib.List>
      {content.map(({ content }, index) => (
        <TabsLib.Content value={'tab-' + index}>{content}</TabsLib.Content>
      ))}
    </TabsLib.Root>
  );
}

export default Tabs;
