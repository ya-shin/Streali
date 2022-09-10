import Button from '../../button/button';
import Input from '../../forms/input/input';
import Tabs from '../../tabs/tabs';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import TabsGeneral from './tabs-general';
import TabsName from './tabs-name';
import TabsMessage from './tabs-message';
import React, { useEffect } from 'react';
import type { ChatTheme } from '@streali/shared/schema';

export interface ChatSettingsProps {
  className?: string;
  onSettingsChange: (settings: unknown) => void;
  defaultSettings: Omit<ChatTheme, 'user_id' | 'id'> | ChatTheme;
  onSave: (data: FieldValues) => void;
}

export function ChatSettings(props: ChatSettingsProps) {
  const { className, onSettingsChange, defaultSettings, onSave } = props;
  const { control, watch, getValues, handleSubmit } = useForm({
    defaultValues: defaultSettings as FieldValues,
  });

  useEffect(() => {
    const subscription = watch((value) => onSettingsChange(value));
    return () => subscription.unsubscribe();
  }, [watch, onSettingsChange, getValues]);

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

  const onSubmit = handleSubmit((theme: FieldValues) => {
    onSave(theme);
  });

  return (
    <div
      className={`w-full h-screen border-r border-dark-300 p-10 ${className}`}
    >
      <form onSubmit={onSubmit}>
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
          className="mb-3"
        />
        <Controller
          name="title"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              defaultValue={value}
              label="Title of the theme"
              className="mb-6"
              type="text"
              onChange={(e: React.ChangeEvent) => {
                const target = e.target as HTMLInputElement;
                onChange(target.value);
              }}
            />
          )}
        />

        <Tabs content={tabs} />
      </form>
    </div>
  );
}

export default ChatSettings;
