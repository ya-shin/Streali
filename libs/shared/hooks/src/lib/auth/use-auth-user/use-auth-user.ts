import { useQuery } from '@tanstack/react-query';
import { getAuthUser, queryKeys } from '@streali/shared/api';

export function useAuthUser() {
  return useQuery(queryKeys.authUser(), getAuthUser, {
    staleTime: Infinity,
  });
}
