import { useQuery } from '@tanstack/react-query';
import { queryKeys, getAuthCheck } from '@streali/shared/api';

export function useAuthCheck() {
  return useQuery(queryKeys.authCheck(), getAuthCheck, {
    staleTime: Infinity,
  });
}
