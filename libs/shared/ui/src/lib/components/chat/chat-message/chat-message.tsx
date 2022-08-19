import { ChatMessage } from '@streali/shared/interfaces';
import { useEffect } from 'react';

export interface ChatMessageProps {
  settings: ChatMessage;
}

export function ChatMessage(props: ChatMessageProps) {
  const { settings } = props;

  const containerStyle = {
    alignItems:
      settings.global.align === 'left'
        ? 'flex-start'
        : settings.global.align === 'right'
        ? 'flex-end'
        : 'center',
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

  useEffect(() => {
    (async () => {
      const WebFont = await import('webfontloader');
      WebFont.load({
        google: {
          families: [nameStyle.fontFamily],
        },
      });
    })();
  }, [nameStyle.fontFamily]);

  return (
    <div style={containerStyle} className="flex flex-col w-full">
      <div style={nameStyle}>Name</div>
      <div>Message</div>
    </div>
  );
}

export default ChatMessage;
