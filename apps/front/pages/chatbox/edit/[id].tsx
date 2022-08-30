import { useChatTheme } from '@streali/shared/hooks';
import { ChatMessage as Message } from '@streali/shared/interfaces';
import { ChatDemo, ChatMessage, ChatSettings } from '@streali/shared/ui';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function Create() {
  const [settings, setSettings] = useState<Message | null>(null);

  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading } = useChatTheme(id as string);

  useEffect(() => {
    data &&
      setSettings({
        title: data[0].title,
        global: data[0].global,
        name: data[0].name,
        message: data[0].message,
      });
  }, []);

  return (
    <>
      {!isLoading && (
        <div className="flex w-full">
          <div className="w-[400px] shrink-0">
            <ChatSettings
              onSettingsChange={setSettings}
              defaultSettings={data[0]}
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
      )}
    </>
  );
}

export default Create;
