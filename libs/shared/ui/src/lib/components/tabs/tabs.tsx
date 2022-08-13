import * as TabsLib from '@radix-ui/react-tabs';
import { useState } from 'react';
import Button, { ButtonColor, ButtonSize } from '../button/button';

export interface TabsProps {
  content: TabProps[];
}

export interface TabProps {
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export function Tabs(props: TabsProps) {
  const { content } = props;
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const handleChange = (selectedIndex: number) => {
    const selectedTab: TabProps = content[selectedIndex];

    if (!selectedTab.disabled) setActiveTabIndex(selectedIndex);
  };

  return (
    <TabsLib.Root defaultValue="tab-0">
      <TabsLib.List className="flex gap-2 mb-3">
        {content.map(({ title, disabled }, index) => (
          <TabsLib.Trigger value={'tab-' + index} disabled={disabled}>
            <Button
              color={
                activeTabIndex === index
                  ? ButtonColor.Primary
                  : ButtonColor.Dark
              }
              size={ButtonSize.Small}
              disabled={disabled}
              onClick={() => handleChange(index)}
            >
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
