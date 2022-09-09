import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@streali/shared/utils';
import { AuthUserSchema } from '@streali/shared/schema';
import { queryKeys } from '../../query-keys';

export function useAuthUser() {
  return useQuery(
    queryKeys.authUser(),
    async () => {
      const response = await apiClient.get('/me');

      return AuthUserSchema.parse(response.data);
    },
    {
      staleTime: Infinity,
    }
  );
}
