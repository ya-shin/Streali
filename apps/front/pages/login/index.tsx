import { Button } from '@streali/shared/ui';
import { supabase } from '@streali/shared/utils';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  console.log(supabase.auth.session());

  const handleTwitchLogin = async () => {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'twitch',
    });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <Button iconLeft="twitch-fill" onClick={handleTwitchLogin}>
        Login with Twitch
      </Button>
    </div>
  );
}

export default Login;
