import { getChatThemeById, queryKeys } from '@streali/shared/api';
import { useQuery } from '@tanstack/react-query';

export function useChatTheme(themeId: string) {
  return useQuery(queryKeys.chat(themeId), () => getChatThemeById(themeId), {
    enabled: typeof themeId !== 'undefined',
    staleTime: Infinity,
  });
}

export default useChatTheme;
