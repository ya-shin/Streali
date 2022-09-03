import { ChatMessage as Message } from '@streali/shared/interfaces';
import { chatMessageMock } from '@streali/shared/mocks';
import { TwitchMessage } from '@streali/shared/schema';
import { useEffect, useState } from 'react';
import { ChatMessage } from '../chat-message/chat-message';

export interface ChatDemoProps {
  settings: Message;
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
