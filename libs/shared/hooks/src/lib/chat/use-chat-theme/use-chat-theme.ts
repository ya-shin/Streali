import { getChatThemeById } from '@streali/shared/api';
import { useQuery } from '@tanstack/react-query';

export function useChatTheme(themeId?: string) {
  const query = useQuery(['chat', themeId], () => getChatThemeById(themeId!), {
    enabled: typeof themeId !== 'undefined',
  });

  return query;
}

export default useChatTheme;
