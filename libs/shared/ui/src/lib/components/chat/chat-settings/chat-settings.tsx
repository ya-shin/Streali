import Button from '../../button/button';
import FontSelect from '../../forms/font-select/font-select';
import Input from '../../forms/input/input';
import Slider from '../../forms/slider/slider';
import Tabs from '../../tabs/tabs';
import { useForm, Controller } from 'react-hook-form';
import Select from '../../forms/select/select';
import TabsGeneral from './tabs-general';
import TabsName from './tabs-name';

export interface ChatSettingsProps {
  className?: string;
}

export function ChatSettings(props: ChatSettingsProps) {
  const { className } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const tabs = [
    {
      title: 'General',
      content: <TabsGeneral control={control} />,
    },
    {
      title: 'Name',
      content: <TabsName control={control} />,
    },
    {
      title: 'Message',
      content: <div></div>,
    },
  ];

  return (
    <div
      className={`w-full h-screen border-r border-dark-300 p-10 ${className}`}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex mb-6 justify-between items-center">
          <h1 className="text-3xl font-semibold font-title block">
            Chat editor
          </h1>
          <Button iconLeft="save-line" type="submit">
            Save
          </Button>
        </div>
        <Input
          disabled
          defaultValue="https://app.streali.com/chat/overlay/24352432342"
          label="Link to copy on browser source"
          className="mb-6"
        />
        <Tabs content={tabs} />
      </form>
    </div>
  );
}

export default ChatSettings;
