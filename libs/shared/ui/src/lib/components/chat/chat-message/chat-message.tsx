import { ChatMessage } from '@streali/shared/interfaces';
import { useEffect } from 'react';

export interface ChatMessageProps {
  settings: ChatMessage;
  name: string;
  message: string;
}

export function ChatMessage(props: ChatMessageProps) {
  const { settings, name, message } = props;

  const containerStyle = {
    alignItems:
      settings.global.align === 'left'
        ? 'flex-start'
        : settings.global.align === 'right'
        ? 'flex-end'
        : 'center',
    marginBottom: settings.global.spaceBetweenMessages + 'px',
    flexDirection: settings.global.layout === 'stack' ? 'column' : 'row',
  };

  const nameStyle = {
    width: settings.name.fullWidth ? '100%' : 'auto',
    fontFamily: settings.name.fontFamily,
    color: settings.name.textColor,
    backgroundColor: settings.name.backgroundColor,
    textAlign: settings.name.textAlign,
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
    borderRadius: `${settings.name.borderRadius.top}px ${settings.name.borderRadius.right}px ${settings.name.borderRadius.bottom}px ${settings.name.borderRadius.left}px`,
  };

  const messageStyle = {
    width: settings.message.fullWidth ? '100%' : 'auto',
    fontFamily: settings.message.fontFamily,
    color: settings.message.textColor,
    backgroundColor: settings.message.backgroundColor,
    textAlign: settings.message.textAlign,
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
    borderRadius: `${settings.message.borderRadius.top}px ${settings.name.borderRadius.right}px ${settings.name.borderRadius.bottom}px ${settings.name.borderRadius.left}px`,
  };

  useEffect(() => {
    (async () => {
      const WebFont = await import('webfontloader');
      WebFont.load({
        google: {
          families: [nameStyle.fontFamily, messageStyle.fontFamily],
        },
      });
    })();
  }, [nameStyle.fontFamily, messageStyle.fontFamily]);

  return (
    <div style={containerStyle} className="flex w-full">
      <div style={nameStyle} className="shrink-0">
        {name}
      </div>
      <div style={messageStyle}>{message}</div>
    </div>
  );
}

export default ChatMessage;
