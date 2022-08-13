import FontSelect from '../../forms/font-select/font-select';
import Input from '../../forms/input/input';
import Slider from '../../forms/slider/slider';
import Tabs from '../../tabs/tabs';

/* eslint-disable-next-line */
export interface ChatSettingsProps {}

export function ChatSettings(props: ChatSettingsProps) {
  const tabs = [
    {
      title: 'General',
      content: (
        <div>
          <Slider
            label="Space between message"
            max={100}
            min={0}
            className="mb-6 mt-6"
          />
          <FontSelect label="Choose a font" className="mb-3" />
        </div>
      ),
    },
    {
      title: 'Name',
      content: <div></div>,
    },
    {
      title: 'Message',
      content: <div></div>,
    },
  ];

  return (
    <div className="w-full h-screen border-r border-dark-300 p-10">
      <h1 className="text-3xl font-semibold font-title mb-6 block">
        Chatbox editor
      </h1>
      <Input
        disabled
        defaultValue="https://app.streali.com/chat/overlay/24352432342"
        label="Link to copy on browser source"
        className="mb-6"
      />
      <Tabs content={tabs} />
    </div>
  );
}

export default ChatSettings;
