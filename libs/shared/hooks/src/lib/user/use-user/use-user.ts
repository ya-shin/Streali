import { getUserById } from '@streali/shared/api';
import { useQuery } from '@tanstack/react-query';

export function useUser(userId?: string) {
  const query = useQuery(['user', userId], () => getUserById(userId), {
    enabled: typeof userId !== 'undefined',
  });
  return query;
}

export default useUser;
