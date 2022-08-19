export interface GlobalChat {
  spaceBetweenMessages: number;
  align: 'left' | 'center' | 'right';
}

export interface NameChat {
  fullWidth: boolean;
  fontFamily: string;
  textAlign: 'left' | 'center' | 'right';
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: string;
  padding: { top: number; bottom: number; left: number; right: number };
  margin: { top: number; bottom: number; left: number; right: number };
  borderRadius: { top: number; bottom: number; left: number; right: number };
}

export interface MessageChat {
  fullWidth: boolean;
  fontFamily: string;
  textAlign: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  borderWidth: string;
  padding: { top: number; bottom: number; left: number; right: number };
  margin: { top: number; bottom: number; left: number; right: number };
  borderRadius: { top: number; bottom: number; left: number; right: number };
}

export interface ChatMessage {
  global: GlobalChat;
  name: NameChat;
  message: MessageChat;
}
