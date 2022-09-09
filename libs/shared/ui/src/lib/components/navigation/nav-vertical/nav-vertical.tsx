import Avatar from '../../avatar/avatar';
import Icon from '../../icon/icon';
import PopoverNavigation, {
  PopoverLink,
} from '../../popover-navigation/popover-navigation';
import Popover from '../../popover/popover';
import { useAuthUser, useLogout } from '@streali/shared/hooks';
import ButtonNav from './button-nav';
import { useState } from 'react';

export interface NavVerticalItems {
  icon: string;
  title: string;
  link: string;
}

export interface NavVerticalProps {
  navigation: { icon: string; items: PopoverLink[] }[];
}

export function NavVertical(props: NavVerticalProps) {
  const { data: user } = useAuthUser();
  const { mutate: logout } = useLogout();
  const { navigation } = props;
  const [userNavOpen, setUserNavOpen] = useState(false);

  const userNavigation: PopoverLink[] = [
    {
      title: 'Profile',
      icon: 'user-3-line',
      link: '/profile',
    },
    {
      title: 'Sign out',
      icon: 'logout-box-line',
      link: '/login',
      color: 'error',
      onClick: () => logout(),
    },
  ];

  return (
    <div className="h-screen w-[72px] bg-dark-500 border-r border-dark-300 fixed top-0 left-0 flex flex-col justify-between items-center py-3">
      <div>
        <div className="w-10 h-10 bg-dark-100 rounded-full mb-3"></div>
        <div className="flex flex-col gap-1">
          {navigation.map((item, index) => (
            <div key={index}>
              <ButtonNav icon={item.icon} items={item.items} />
            </div>
          ))}
        </div>
      </div>
      <div>
        {user && (
          <Popover
            open={userNavOpen}
            onOpenChange={setUserNavOpen}
            trigger={
              <Avatar
                className="cursor-pointer"
                size={40}
                src={user.avatar_url}
              />
            }
            side="right"
            align="end"
          >
            <PopoverNavigation
              links={userNavigation}
              onLinkClick={() => setUserNavOpen(false)}
            />
          </Popover>
        )}
      </div>
    </div>
  );
}

export default NavVertical;
