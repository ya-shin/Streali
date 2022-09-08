import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout, queryKeys } from '@streali/shared/api';

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation(logout, {
    onSuccess: () => {
      void queryClient.invalidateQueries(queryKeys.authCheck());
      void queryClient.setQueryData(queryKeys.authUser(), null);
    },
  });
}
