import { chatMessageMock } from '@streali/shared/mocks';
import { ChatTheme, TwitchMessage } from '@streali/shared/schema';
import { useEffect, useState } from 'react';
import { ChatMessage } from '../chat-message/chat-message';

export interface ChatDemoProps {
  settings: Omit<ChatTheme, 'id' | 'user_id'>;
}

export function ChatDemo(props: ChatDemoProps) {
  const { settings } = props;

  const [demo, setDemo] = useState<TwitchMessage[]>([]);

  useEffect(() => {
    const pushMessage = () => {
      const randTiming = Math.floor(Math.random() * (3 - 6 + 1) + 3);
      setDemo((d) => {
        if (d.length >= 50) d.shift();
        const newMessage = chatMessageMock(1);
        return [...d, ...newMessage];
      });
      setTimeout(pushMessage, randTiming * 1000);
    };

    pushMessage();
  }, []);

  useEffect(() => {
    if (settings) {
      (async () => {
        const WebFont = await import('webfontloader');
        WebFont.load({
          google: {
            families: [
              settings.name.fontFamily +
                ':100,200,300,400,500,600,700,800,900,950',
              settings.message.fontFamily +
                ':100,200,300,400,500,600,700,800,900,950',
            ],
          },
        });
      })();
    }
  }, [settings.name.fontFamily, settings.message.fontFamily]);

  return (
    <>
      {demo.map((message, index) => (
        <ChatMessage
          key={index}
          settings={settings}
          name={message.username || 'Streali'}
          message={message.message}
        />
      ))}
    </>
  );
}

export default ChatDemo;
