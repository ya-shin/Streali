import Avatar from '../../avatar/avatar';
import Icon from '../../icon/icon';
import PopoverNavigation, {
  PopoverLink,
} from '../../popover-navigation/popover-navigation';
import Popover from '../../popover/popover';
import { useAuthUser, useLogout } from "@streali/shared/hooks";

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
                  <PopoverNavigation links={item.items} />
                </div>
              </Popover>
            </div>
          ))}
        </div>
      </div>
      <div>
        {user && (
          <Popover
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
            <PopoverNavigation links={userNavigation} />
          </Popover>
        )}
      </div>
    </div>
  );
}

export default NavVertical;
