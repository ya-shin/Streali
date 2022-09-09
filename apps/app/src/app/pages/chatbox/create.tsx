import { useState } from 'react';
import { FieldValues } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useCreateChatTheme } from '@streali/shared/hooks';
import { ChatDemo, ChatMessage, ChatSettings } from '@streali/shared/ui';
import type { ChatTheme } from '@streali/shared/schema';

const defaultSettings: Omit<ChatTheme, 'user_id' | 'id'> | ChatTheme = {
  title: 'Chat Theme Title',
  global: {
    spaceBetweenMessages: 12,
    align: 'left' as 'left' | 'right' | 'center',
    layout: 'stack' as 'stack' | 'inline',
  },
  name: {
    fullWidth: false,
    fontFamily: 'Rubik',
    fontSize: '16',
    textAlign: 'left' as 'left' | 'right' | 'center',
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
    textAlign: 'left' as 'left' | 'right' | 'center',
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
};

export function CreateChatbox() {
  const [settings, setSettings] = useState<Omit<
    ChatTheme,
    'id' | 'user_id'
  > | null>(defaultSettings);
  const navigate = useNavigate();

  const { mutate: createChatTheme } = useCreateChatTheme();
  function handleSubmit(theme: FieldValues) {
    createChatTheme(theme as ChatTheme, {
      onSuccess() {
        navigate('/chatbox/library');
      },
    });
  }

  return (
    <div className="flex w-full">
      <div className="w-[400px] shrink-0">
        <ChatSettings
          onSettingsChange={(settings) => {
            // @ts-expect-error Should type that correctly
            setSettings(settings);
          }}
          defaultSettings={defaultSettings}
          onSave={handleSubmit}
        />
      </div>
      <div className="w-[400px] shrink-0 border-r border-dark-300 flex justify-center items-center px-3">
        {settings && (
          <ChatMessage
            settings={settings}
            name="viewer_1"
            message="This is message content"
          />
        )}
      </div>
      <div className="flex flex-col items-end justify-end h-screen p-10 overflow-hidden grow">
        {settings && <ChatDemo settings={settings} />}
      </div>
    </div>
  );
}

export default CreateChatbox;
