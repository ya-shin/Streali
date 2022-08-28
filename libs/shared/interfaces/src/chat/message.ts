export interface GlobalChat {
  spaceBetweenMessages: number;
  align: 'left' | 'center' | 'right';
  layout: 'stack' | 'inline';
}

export interface NameChat {
  fullWidth: boolean;
  fontFamily: string;
  fontSize: string;
  textAlign: 'left' | 'center' | 'right';
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: string;
  padding: { top: number; bottom: number; left: number; right: number };
  margin: { top: number; bottom: number; left: number; right: number };
  borderRadius: {
    topLeft: number;
    topRight: number;
    bottomRight: number;
    bottomLeft: number;
  };
}

export interface MessageChat {
  fullWidth: boolean;
  fontFamily: string;
  fontSize: string;
  textAlign: 'left' | 'center' | 'right';
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: string;
  padding: { top: number; bottom: number; left: number; right: number };
  margin: { top: number; bottom: number; left: number; right: number };
  borderRadius: {
    topLeft: number;
    topRight: number;
    bottomRight: number;
    bottomLeft: number;
  };
}

export interface ChatMessage {
  global: GlobalChat;
  name: NameChat;
  message: MessageChat;
}
