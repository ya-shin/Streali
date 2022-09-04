import { Button } from '@streali/shared/ui';
import { supabase } from '@streali/shared/utils';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  const [isLogin, setIsLogin] = useState(false);
  const user = supabase.auth.user();

  useEffect(() => {
    if (user) {
      setIsLogin(true);
    }
  }, [user]);

  const handleTwitchLogin = async () => {
    await supabase.auth.signIn(
      {
        provider: 'twitch',
      },
      {
        scopes:
          'bits:read channel:read:polls channel:read:charity channel:read:goals channel:read:hype_train channel:read:predictions channel:read:redemptions channel:read:subscriptions channel:read:vips user:read:email user:read:follows user:read:subscriptions',
      }
    );
  };

  if (isLogin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="h-screen flex justify-center items-center">
      <Button iconLeft="twitch-fill" onClick={handleTwitchLogin}>
        Login with Twitch
      </Button>
    </div>
  );
}

export default Login;
