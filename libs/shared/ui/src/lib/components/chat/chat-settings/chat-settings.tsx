import Button from '../../button/button';
import Input from '../../forms/input/input';
import Tabs from '../../tabs/tabs';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import TabsGeneral from './tabs-general';
import TabsName from './tabs-name';
import TabsMessage from './tabs-message';
import React, { useEffect, useState } from 'react';
import { createChatTheme } from '@streali/shared/api';
import { supabase } from '@streali/shared/utils';
import { ChatMessage } from '@streali/shared/interfaces';
import { useRouter } from 'next/router';
import { useMutation } from '@tanstack/react-query';

export interface ChatSettingsProps {
  className?: string;
  onSettingsChange: (settings: any) => void;
  defaultSettings: ChatMessage;
}

export function ChatSettings(props: ChatSettingsProps) {
  const { className, onSettingsChange, defaultSettings } = props;
  const router = useRouter();
  const { control, handleSubmit, watch, getValues, reset } = useForm();

  const createTheme = useMutation(async (theme: FieldValues) => {
    const userId = supabase.auth.user()?.id;
    if (userId) {
      const { data } = await createChatTheme(theme as ChatMessage, userId);
      if (data) {
        router.push(`/`);
      }
    }
  });

  const onSubmit = async (theme: FieldValues) => {
    createTheme.mutate(theme);
  };

  useEffect(() => {
    reset(defaultSettings);
  }, [defaultSettings]);

  useEffect(() => {
    onSettingsChange(getValues() as ChatMessage);
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
