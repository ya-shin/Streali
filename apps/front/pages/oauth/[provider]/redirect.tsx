import { getJWTToken } from '@streali/shared/api';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

function Redirect() {
  const router = useRouter();
  const { access_token, provider } = router.query;

  useQuery(
    ['oauth'],
    async () =>
      await getJWTToken(
        access_token as string,
        provider as string,
        router.query['raw[expires_in]'] as string
      ),
    {
      enabled: !!access_token && !!provider,
      onSuccess: () => {
        router.push('/');
      },
    }
  );

  return <div>Loading...</div>;
}

export default Redirect;
