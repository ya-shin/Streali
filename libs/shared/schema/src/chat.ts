import * as z from 'zod';

export const GlobalSchema = z.object({
  spaceBetweenMessages: z.number(),
  align: z.enum(['left', 'center', 'right']),
  layout: z.enum(['stack', 'inline']),
});

export const NameChatSchema = z.object({
  fullWidth: z.boolean(),
  fontFamily: z.string(),
  fontWeight: z.string(),
  fontSize: z.string(),
  textAlign: z.enum(['left', 'center', 'right']),
  textColor: z.string(),
  backgroundColor: z.string(),
  borderColor: z.string(),
  borderWidth: z.number(),
  padding: z.object({
    top: z.number(),
    bottom: z.number(),
    left: z.number(),
    right: z.number(),
  }),
  margin: z.object({
    top: z.number(),
    bottom: z.number(),
    left: z.number(),
    right: z.number(),
  }),
  borderRadius: z.object({
    topLeft: z.number(),
    topRight: z.number(),
    bottomRight: z.number(),
    bottomLeft: z.number(),
  }),
});

export const MessageSchema = z.object({
  fullWidth: z.boolean(),
  fontFamily: z.string(),
  fontWeight: z.string(),
  fontSize: z.string(),
  textAlign: z.enum(['left', 'center', 'right']),
  textColor: z.string(),
  backgroundColor: z.string(),
  borderColor: z.string(),
  borderWidth: z.number(),
  padding: z.object({
    top: z.number(),
    bottom: z.number(),
    left: z.number(),
    right: z.number(),
  }),
  margin: z.object({
    top: z.number(),
    bottom: z.number(),
    left: z.number(),
    right: z.number(),
  }),
  borderRadius: z.object({
    topLeft: z.number(),
    topRight: z.number(),
    bottomRight: z.number(),
    bottomLeft: z.number(),
  }),
});

export const ChatThemeSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  title: z.string(),
  global: GlobalSchema,
  name: NameChatSchema,
  message: MessageSchema,
});

export type ChatTheme = z.infer<typeof ChatThemeSchema>;
export type NameChat = z.infer<typeof NameChatSchema>;
export type GlobalChat = z.infer<typeof GlobalSchema>;
export type MessageChat = z.infer<typeof MessageSchema>;
