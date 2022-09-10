import { useEffect, useState } from 'react';
import type { ChatTheme } from '@streali/shared/schema';

export interface ChatMessageProps {
  settings: Omit<ChatTheme, 'user_id' | 'id'> | ChatTheme;
  name: string;
  message: string;
}

export function ChatMessage(props: ChatMessageProps) {
  const { settings, name, message } = props;

  const [containerStyle, setContainerStyle] = useState<React.CSSProperties>({});
  const [nameStyle, setNameStyle] = useState<React.CSSProperties>({});
  const [messageStyle, setMessageStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    if (settings && settings.global && settings.name && settings.message) {
      setContainerStyle({
        alignItems:
          settings.global.align === 'left'
            ? 'flex-start'
            : settings.global.align === 'right'
            ? 'flex-end'
            : ('center' as 'flex-start' | 'flex-end' | 'center'),
        marginBottom: settings.global.spaceBetweenMessages + 'px',
        flexDirection:
          settings.global.layout === 'stack'
            ? 'column'
            : ('row' as 'column' | 'row'),
      });

      setNameStyle({
        width: settings.name.fullWidth ? '100%' : 'auto',
        fontFamily: settings.name.fontFamily,
        fontWeight: settings.name.fontWeight,
        color: settings.name.textColor,
        backgroundColor: settings.name.backgroundColor,
        textAlign: settings.name.textAlign as 'left' | 'center' | 'right',
        borderWidth: settings.name.borderWidth,
        borderColor: settings.name.borderColor,
        paddingTop: settings.name.padding.top + 'px',
        paddingBottom: settings.name.padding.bottom + 'px',
        paddingLeft: settings.name.padding.left + 'px',
        paddingRight: settings.name.padding.right + 'px',
        marginTop: settings.name.margin.top + 'px',
        marginBottom: settings.name.margin.bottom + 'px',
        marginLeft: settings.name.margin.left + 'px',
        marginRight: settings.name.margin.right + 'px',
        borderRadius: `${settings.name.borderRadius.topLeft}px ${settings.name.borderRadius.topRight}px ${settings.name.borderRadius.bottomLeft}px ${settings.name.borderRadius.bottomRight}px`,
      });

      setMessageStyle({
        width: settings.message.fullWidth ? '100%' : 'auto',
        fontFamily: settings.message.fontFamily,
        fontWeight: settings.message.fontWeight,
        color: settings.message.textColor,
        backgroundColor: settings.message.backgroundColor,
        textAlign: settings.message.textAlign as 'left' | 'right' | 'center',
        borderWidth: settings.message.borderWidth,
        borderColor: settings.message.borderColor,
        paddingTop: settings.message.padding.top + 'px',
        paddingBottom: settings.message.padding.bottom + 'px',
        paddingLeft: settings.message.padding.left + 'px',
        paddingRight: settings.message.padding.right + 'px',
        marginTop: settings.message.margin.top + 'px',
        marginBottom: settings.message.margin.bottom + 'px',
        marginLeft: settings.message.margin.left + 'px',
        marginRight: settings.message.margin.right + 'px',
        borderRadius: `${settings.message.borderRadius.topLeft}px ${settings.name.borderRadius.topRight}px ${settings.name.borderRadius.bottomLeft}px ${settings.name.borderRadius.bottomRight}px`,
      });
    }
  }, [settings]);

  useEffect(() => {
    if (nameStyle.fontFamily && messageStyle.fontFamily) {
      (async () => {
        const WebFont = await import('webfontloader');
        WebFont.load({
          google: {
            families: [
              nameStyle.fontFamily as string,
              messageStyle.fontFamily as string,
            ],
          },
        });
      })();
    }
  }, [nameStyle.fontFamily, messageStyle.fontFamily]);

  return (
    <div style={containerStyle} className="flex w-full">
      <div style={nameStyle} className="shrink-0">
        {name}
      </div>
      <div
        style={messageStyle}
        className="chat__message"
        dangerouslySetInnerHTML={{ __html: message }}
      ></div>
    </div>
  );
}

export default ChatMessage;
