import tmi from 'tmi.js';
import { useParams } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useChatTheme } from '@streali/shared/hooks';
import { TwitchMessage } from '@streali/shared/schema';
import { EmoteOptions, parse } from 'simple-tmi-emotes';
import { ChatMessage } from '@streali/shared/ui';

function EmbedChatbox() {
  const [messages, setMessages] = useState<TwitchMessage[]>([]);
  const { themeId } = useParams();
  const { data: theme } = useChatTheme(themeId!);

  const client = useMemo(
    () =>
      new tmi.Client({
        channels: [theme ? theme.user.username : ''],
      }),
    [theme]
  );

  client.on('message', (_, tags, message) => {
    const options: EmoteOptions = {
      format: 'default',
      themeMode: 'light',
      scale: '2.0',
    };

    const msg: TwitchMessage = {
      id: tags?.id,
      username: tags['display-name'],
      twitch: tags?.username,
      emotes: tags?.emotes || {},
      date: new Date(),
      message,
      badges: tags?.badges,
      mod: tags?.mod,
      subscriber: tags?.subscriber,
      color: tags?.color,
    };

    msg.message = parse(msg.message, msg.emotes, options);

    setMessages((oldMessages) => {
      if (oldMessages.length >= 50) oldMessages.shift();
      return [...oldMessages, msg];
    });
  });

  client.on(
    'messagedeleted',
    (_channel, _username, _deleteMessage, userstate) => {
      setMessages((msgs: TwitchMessage[]) => {
        const msgId = userstate['target-msg-id'];

        return [...msgs].filter((m) => m.id !== msgId);
      });
    }
  );

  client.on('ban', (_channel, username) => {
    setMessages((msgs) => {
      return [...msgs].filter((m) => m.twitch !== username);
    });
  });

  client.on('timeout', (_channel, username) => {
    setMessages((msgs) => {
      return [...msgs].filter((m) => m.twitch !== username);
    });
  });

  client.on('clearchat', () => setMessages([]));

  useEffect(() => {
    if (theme) {
      client.connect();
    }
  }, [client, theme]);

  useEffect(() => {
    document.body.style.backgroundColor = 'transparent';
  }, []);

  return (
    <div className="flex flex-col items-end justify-end h-screen p-10 overflow-hidden grow">
      {JSON.stringify(theme)}
      {theme &&
        messages.map((message, index) => (
          <ChatMessage
            key={message.message + message.date + Math.random() * index}
            settings={theme}
            message={message.message}
            name={message.username || ''}
          />
        ))}
    </div>
  );
}

export default EmbedChatbox;
