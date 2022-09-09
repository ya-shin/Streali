import { useQuery } from '@tanstack/react-query';
import { ChatTheme } from '@streali/shared/schema';
import { apiClient } from '@streali/shared/utils';
import { queryKeys } from '../../query-keys';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseUserChatThemes {
  data?: ChatTheme[] | undefined | null;
  error: unknown;
  isLoading: boolean;
}

export function useUserChatThemes(): UseUserChatThemes {
  return useQuery(
    queryKeys.chats(),
    async () => {
      const { data } = await apiClient.get('/chat-themes');

      return data;
    },
    {
      staleTime: Infinity,
    }
  );
}

export default useUserChatThemes;
