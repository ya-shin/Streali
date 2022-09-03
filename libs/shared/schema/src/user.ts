import * as z from 'zod';

export const UserSchema = z.object({
  id: z.string(),
  instance_id: z.string(),
  aud: z.string(),
  role: z.string(),
  email: z.string(),
});
