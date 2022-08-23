import { Button } from '@streali/shared/ui';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  return (
    <div>
      <Button
        iconLeft="twitch-fill"
        link="http://localhost:1337/api/connect/twitch"
        external
      >
        Login with Twitch
      </Button>
    </div>
  );
}

export default Login;
