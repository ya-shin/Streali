import { getUserChatThemes, queryKeys } from '@streali/shared/api';
import { useQuery } from '@tanstack/react-query';
import { ChatTheme } from '@streali/shared/schema';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseUserChatThemes {
  data?: ChatTheme[] | undefined | null;
  error: unknown;
  isLoading: boolean;
}

export function useUserChatThemes(): UseUserChatThemes {
  return useQuery(queryKeys.chats(), getUserChatThemes, {
    staleTime: Infinity,
  });
}

export default useUserChatThemes;
