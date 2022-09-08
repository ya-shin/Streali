import { Navigate } from 'react-router-dom';
import { Button } from '@streali/shared/ui';
import { useAuthCheck } from '@streali/shared/hooks';

export function Login() {
  const { data, status } = useAuthCheck();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (data?.authenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Button
        link={'http://localhost:3333/oauth/twitch/redirect'}
        iconLeft="twitch-fill"
        external
      >
        Login with Twitch
      </Button>
    </div>
  );
}

export default Login;
