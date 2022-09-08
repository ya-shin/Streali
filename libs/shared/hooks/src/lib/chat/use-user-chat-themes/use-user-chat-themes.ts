import { getUserChatThemes, queryKeys } from '@streali/shared/api';
import { useQuery } from '@tanstack/react-query';
import { ChatMessage } from '@streali/shared/interfaces';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseUserChatThemes {
  data?: ChatMessage[] | undefined | null;
  error: unknown;
  isLoading: boolean;
}

export function useUserChatThemes(): UseUserChatThemes {
  return useQuery(queryKeys.chats(), getUserChatThemes, {
    staleTime: Infinity,
  });
}

export default useUserChatThemes;
