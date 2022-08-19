import Button from '../../button/button';
import Input from '../../forms/input/input';
import Tabs from '../../tabs/tabs';
import { FieldValues, useForm } from 'react-hook-form';
import TabsGeneral from './tabs-general';
import TabsName from './tabs-name';
import TabsMessage from './tabs-message';
import { useEffect } from 'react';

export interface ChatSettingsProps {
  className?: string;
  onSettingsChange: (settings: any) => void;
}

export function ChatSettings(props: ChatSettingsProps) {
  const { className, onSettingsChange } = props;

  const { control, handleSubmit, watch, getValues, reset } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  useEffect(() => {
    reset({
      global: {
        spaceBetweenMessages: 0,
        align: 'left',
      },
      name: {
        fullWidth: false,
        fontFamily: 'Roboto',
        textAlign: 'left',
        textColor: '#000000',
        backgroundColor: '#000000',
        borderColor: '#000000',
        borderWidth: 0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        borderRadius: { top: 0, right: 0, bottom: 0, left: 0 },
      },
      message: {
        fullWidth: false,
        fontFamily: 'Roboto',
        textAlign: 'left',
        textColor: '#000000',
        backgroundColor: '#000000',
        borderColor: '#000000',
        borderWidth: 0,
        padding: { top: 0, right: 0, bottom: 0, left: 0 },
        margin: { top: 0, right: 0, bottom: 0, left: 0 },
        borderRadius: { top: 0, right: 0, bottom: 0, left: 0 },
      },
    });
  }, []);

  useEffect(() => {
    onSettingsChange(getValues());
    const subscription = watch((value) => onSettingsChange(value));
    return () => subscription.unsubscribe();
  }, [watch]);

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
      content: <TabsMessage control={control} />,
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
