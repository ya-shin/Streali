import Button from '../../button/button';
import Input from '../../forms/input/input';
import Tabs from '../../tabs/tabs';
import { FieldValues, useForm } from 'react-hook-form';
import TabsGeneral from './tabs-general';
import TabsName from './tabs-name';
import TabsMessage from './tabs-message';
import React, { useEffect, useState } from 'react';
import { createChatTheme } from '@streali/shared/api';
import { supabase } from '@streali/shared/utils';
import { ChatMessage } from '@streali/shared/interfaces';
import { useRouter } from 'next/router';

export interface ChatSettingsProps {
  className?: string;
  onSettingsChange: (settings: any) => void;
}

export function ChatSettings(props: ChatSettingsProps) {
  const { className, onSettingsChange } = props;
  const router = useRouter();
  const { control, handleSubmit, watch, getValues, reset } = useForm();
  const [title, setTitle] = useState('Chat Theme Title');

  const onSubmit = async (theme: FieldValues) => {
    const userId = supabase.auth.user()?.id;
    if (userId) {
      const { theme: data, error } = await createChatTheme(
        theme as ChatMessage,
        userId,
        title
      );
      if (data) {
        router.push(`/`);
      }
    }
  };

  useEffect(() => {
    reset({
      global: {
        spaceBetweenMessages: 12,
        align: 'left',
        layout: 'stack',
      },
      name: {
        fullWidth: false,
        fontFamily: 'Rubik',
        fontSize: '16',
        textAlign: 'left',
        textColor: '#000000',
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 1,
        padding: { top: 6, right: 6, bottom: 6, left: 6 },
        margin: { top: 0, right: 0, bottom: 4, left: 0 },
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomRight: 4,
          bottomLeft: 4,
        },
      },
      message: {
        fullWidth: false,
        fontFamily: 'Rubik',
        fontSize: '14',
        textAlign: 'left',
        textColor: '#000000',
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 1,
        padding: { top: 6, right: 6, bottom: 6, left: 6 },
        margin: { top: 0, right: 0, bottom: 4, left: 0 },
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomRight: 4,
          bottomLeft: 4,
        },
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
          className="mb-3"
        />
        <Input
          defaultValue={title}
          label="Title of the theme"
          className="mb-6"
          type="text"
          onChange={(e: React.ChangeEvent) => {
            const target = e.target as HTMLInputElement;
            setTitle(target.value);
          }}
        />
        <Tabs content={tabs} />
      </form>
    </div>
  );
}

export default ChatSettings;
