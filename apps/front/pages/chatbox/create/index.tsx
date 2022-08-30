import { ChatMessage as Message } from '@streali/shared/interfaces';
import { ChatDemo, ChatMessage, ChatSettings } from '@streali/shared/ui';
import { useState } from 'react';

export function Create() {
  const [settings, setSettings] = useState<Message | null>(null);

  const defaultSettings = {
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

  return (
    <div className="flex w-full">
      <div className="w-[400px] shrink-0">
        <ChatSettings
          onSettingsChange={setSettings}
          defaultSettings={defaultSettings}
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
      <div className="grow p-10 flex flex-col overflow-hidden h-screen items-end justify-end">
        {settings && <ChatDemo settings={settings} />}
      </div>
    </div>
  );
}

export default Create;
