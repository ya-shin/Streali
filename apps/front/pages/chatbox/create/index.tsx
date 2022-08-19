import { ChatMessage as Message } from '@streali/shared/interfaces';
import { ChatDemo, ChatMessage, ChatSettings } from '@streali/shared/ui';
import { useState } from 'react';

export function Create() {
  const [settings, setSettings] = useState<Message | null>(null);

  return (
    <div className="flex w-full">
      <div className="w-[400px] shrink-0">
        <ChatSettings onSettingsChange={setSettings} />
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
