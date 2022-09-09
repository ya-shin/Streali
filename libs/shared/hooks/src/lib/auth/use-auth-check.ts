import { useQuery } from '@tanstack/react-query';
import { apiClient } from '@streali/shared/utils';
import { AuthCheckSchema } from '@streali/shared/schema';
import { queryKeys } from '../../query-keys';

export function useAuthCheck() {
  return useQuery(
    queryKeys.authCheck(),
    async () => {
      const response = await apiClient.get('/auth/check');

      return AuthCheckSchema.parse(response.data);
    },
    {
      staleTime: Infinity,
    }
  );
}
