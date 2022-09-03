import * as z from 'zod';

const TwitchMessageSchema = z.object({
  id: z.optional(z.string()),
  username: z.optional(z.string()),
  twitch: z.optional(z.string()),
  emotes: z.any(),
  date: z.date(),
  message: z.string(),
  badges: z.optional(z.any()),
  mod: z.optional(z.boolean()),
  subscriber: z.optional(z.boolean()),
  color: z.optional(z.string()),
});

export type TwitchMessage = z.infer<typeof TwitchMessageSchema>;
