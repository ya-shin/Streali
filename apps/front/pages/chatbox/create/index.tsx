import { ChatMessage as Message } from '@streali/shared/interfaces';
import { ChatMessage, ChatSettings } from '@streali/shared/ui';
import { useState } from 'react';

export function Create() {
  const [settings, setSettings] = useState<Message | null>(null);

  return (
    <div className="flex w-full">
      <div className="w-[400px] shrink-0">
        <ChatSettings onSettingsChange={setSettings} />
      </div>
      <div className="grow">
        {settings && <ChatMessage settings={settings} />}
      </div>
    </div>
  );
}

export default Create;
