import { useState } from 'react';
import Icon from '../../icon/icon';
import PopoverNavigation, {
  PopoverLink,
} from '../../popover-navigation/popover-navigation';
import Popover from '../../popover/popover';

export interface ButtonNavProps {
  icon: string;
  items: PopoverLink[];
}

function ButtonNav(props: ButtonNavProps) {
  const { icon, items } = props;
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Popover
      open={navOpen}
      onOpenChange={setNavOpen}
      side="right"
      align="start"
      trigger={
        <div className="w-10 h-10 cursor-pointer bg-dark-500 rounded-md text-white flex justify-center items-center hover:bg-primary-100 hover:text-primary-500 transition-colors duration-200 relative">
          <Icon name={icon} />
        </div>
      }
    >
      <div className="flex flex-col gap-2">
        <PopoverNavigation
          links={items}
          onLinkClick={() => setNavOpen(false)}
        />
      </div>
    </Popover>
  );
}

export default ButtonNav;
