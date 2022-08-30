import { getChatThemeById } from '@streali/shared/api';
import { ChatMessage } from '@streali/shared/interfaces';
import { useQuery } from '@tanstack/react-query';

export interface UseChatTheme {
  data?: ChatMessage[] | undefined | null;
  error: unknown;
  isLoading: boolean;
}

export function useChatTheme(themeId?: string): UseChatTheme {
  const { data, error, isLoading } = useQuery(
    ['chat'],
    async () => await getChatThemeById(themeId!),
    {
      enabled: typeof themeId !== 'undefined',
    }
  );
  return { data, error, isLoading };
}

export default useChatTheme;
