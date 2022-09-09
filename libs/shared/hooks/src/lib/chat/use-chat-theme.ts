import * as z from 'zod';
import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@streali/shared/utils';
import { ChatThemeSchema } from '@streali/shared/schema';
import { queryKeys } from '../../query-keys';

export function useChatTheme(themeId: string) {
  return useQuery(
    queryKeys.chat(themeId),
    async () => {
      const { data } = await apiClient.get(`/chat-themes/${themeId}`);

      if (!data) {
        return null;
      }

      const userEmbedSchema = z.object({
        user: z.object({
          username: z.string(),
        }),
      });

      return ChatThemeSchema.merge(userEmbedSchema).parse(data);
    },
    {
      staleTime: Infinity,
    }
  );
}

export default useChatTheme;
