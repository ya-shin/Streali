import { supabase } from '@streali/shared/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Avatar from '../../avatar/avatar';
import Button, { ButtonColor, ButtonSize } from '../../button/button';
import Icon from '../../icon/icon';
import Popover from '../../popover/popover';

export interface NavVerticalItems {
  icon: string;
  title: string;
  link: string;
}

export interface NavVerticalProps {
  navigation: { icon: string; items: NavVerticalItems[] }[];
}

export function NavVertical(props: NavVerticalProps) {
  const [avatar, setAvatar] = useState<string>('');

  const { navigation } = props;
  const user = supabase.auth.user();

  const handleSignOut = () => {
    supabase.auth.signOut();
  };

  useEffect(() => {
    setAvatar(user?.user_metadata['avatar_url']);
  }, [user]);

  return (
    <div className="h-screen w-[72px] bg-dark-500 border-r border-dark-300 fixed top-0 left-0 flex flex-col justify-between items-center py-3">
      <div>
        <div className="w-10 h-10 bg-dark-100 rounded-full mb-3"></div>
        <div className="flex flex-col gap-1">
          {navigation.map((item, index) => (
            <div key={index}>
              <Popover
                side="right"
                align="start"
                trigger={
                  <div className="w-10 h-10 cursor-pointer bg-dark-500 rounded-md text-white flex justify-center items-center hover:bg-primary-100 hover:text-primary-500 transition-colors duration-200 relative">
                    <Icon name={item.icon} />
                  </div>
                }
              >
                <div className="flex flex-col gap-2">
                  {item.items.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <div className="inline-flex h-7 gap-2 items-center hover:bg-primary-500 px-2 transition-colors rounded cursor-pointer">
                        <Icon name={item.icon} className="text-sm" />
                        <span className="font-semibold text-sm">
                          {item.title}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </Popover>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Popover
          trigger={<Avatar className="cursor-pointer" size={40} src={avatar} />}
          side="right"
          align="end"
        >
          <div className="flex flex-col gap-2">
            <Link href="/profile">
              <div className="inline-flex h-7 gap-2 items-center hover:bg-primary-500 px-2 transition-colors rounded cursor-pointer">
                <Icon name="user-3-fill" className="text-sm" />
                <span className="font-semibold text-sm">My profile</span>
              </div>
            </Link>
            <div
              className="inline-flex h-7 gap-2 items-center hover:bg-error-500 px-2 transition-colors rounded cursor-pointer w-full"
              onClick={handleSignOut}
            >
              <Icon name="logout-box-line" className="text-sm" />
              <span className="font-semibold text-sm">Sign out</span>
            </div>
          </div>
        </Popover>
      </div>
    </div>
  );
}

export default NavVertical;
