import { useChatTheme, useUser } from '@streali/shared/hooks';
import { TwitchMessage } from '@streali/shared/schema';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import tmi from 'tmi.js';
import { EmoteOptions, parse } from 'simple-tmi-emotes';
import { ChatMessage } from '@streali/shared/ui';

function EmbedChatbox() {
  const [twitchUsername, setTwitchUsername] = useState<string | null>(null);
  const [messages, setMessages] = useState<TwitchMessage[]>([]);
  const { themeId } = useParams();
  const { data: theme } = useChatTheme(themeId);
  const { data: user } = useUser(theme?.created_by);

  const client = new tmi.Client({
    channels: [twitchUsername ? twitchUsername : ''],
  });

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
        const allMsgs = [...msgs];
        const cleanMsgs = allMsgs.filter((m) => m.id !== msgId);

        return cleanMsgs;
      });
    }
  );

  client.on('ban', (_channel, username) => {
    setMessages((msgs) => {
      const allMsgs = [...msgs];
      const cleanMsgs = allMsgs.filter((m) => m.twitch !== username);

      return cleanMsgs;
    });
  });

  client.on('timeout', (_channel, username) => {
    setMessages((msgs) => {
      const allMsgs = [...msgs];
      const cleanMsgs = allMsgs.filter((m) => m.twitch !== username);

      return cleanMsgs;
    });
  });

  client.on('clearchat', () => setMessages([]));

  useEffect(() => {
    if (user) {
      setTwitchUsername(user.twitch.name);
    }
  }, [user]);

  useEffect(() => {
    if (twitchUsername) {
      client.connect();
    }
  }, [twitchUsername]);

  useEffect(() => {
    document.body.style.backgroundColor = 'transparent';
  }, []);

  return (
    <div className="flex flex-col items-end justify-end h-screen p-10 overflow-hidden grow">
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
