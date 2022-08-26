import { supabase } from '@streali/shared/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Avatar from '../../avatar/avatar';
import Icon from '../../icon/icon';

export interface NavVerticalProps {
  navigation: { icon: string; link: string }[];
}

export function NavVertical(props: NavVerticalProps) {
  const [avatar, setAvatar] = useState<string>('');

  const { navigation } = props;
  const user = supabase.auth.user();

  useEffect(() => {
    setAvatar(user?.user_metadata['avatar_url']);
  }, [user]);

  return (
    <div className="h-screen w-[72px] bg-dark-500 border-r border-dark-300 fixed top-0 left-0 flex flex-col justify-between items-center py-3">
      <div>
        <div className="w-10 h-10 bg-dark-100 rounded-full mb-3"></div>
        <div className="flex flex-col gap-1">
          {navigation.map((item) => (
            <Link href={item.link} key={item.link}>
              <div className="w-10 h-10 bg-dark-500 rounded-md text-white flex justify-center items-center hover:bg-primary-100 hover:text-primary-500 transition-colors duration-200">
                <Icon name={item.icon} />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Avatar size={40} src={avatar} />
      </div>
    </div>
  );
}

export default NavVertical;
