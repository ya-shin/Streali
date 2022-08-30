import { getUserChatThemes } from '@streali/shared/api';
import { useQuery } from '@tanstack/react-query';
import { ChatMessage } from '@streali/shared/interfaces';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseUserChatThemes {
  data?: ChatMessage[] | undefined | null;
  error: unknown;
  isLoading: boolean;
}

export function useUserChatThemes(userId: string): UseUserChatThemes {
  const { data, error, isLoading } = useQuery(
    ['chat'],
    async () => await getUserChatThemes(userId)
  );
  return { data, error, isLoading };
}

export default useUserChatThemes;
