import { toastr, ToastType } from '@streali/shared/utils';
import Button, { ButtonColor } from '../button/button';
import PopoverNavigation from '../popover-navigation/popover-navigation';
import Popover from '../popover/popover';
import { useDeleteChatTheme } from '@streali/shared/hooks';
import { useState } from 'react';

export interface ChatCardProps {
  title: string;
  id: string;
}

export function ChatCard(props: ChatCardProps) {
  const { title, id } = props;
  const { mutate: deleteChatTheme } = useDeleteChatTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="py-3 pl-4 pr-3 border-2 border-dark-300 rounded-md flex justify-between items-center hover:bg-primary-500">
      <h2>{title}</h2>
      <Popover
        open={menuOpen}
        onOpenChange={setMenuOpen}
        align="end"
        side="bottom"
        trigger={<Button iconLeft="more-line" color={ButtonColor.Dark} />}
      >
        <PopoverNavigation
          onLinkClick={() => setMenuOpen(false)}
          links={[
            {
              title: 'Edit',
              link: `/chatbox/${id}/edit`,
              icon: 'edit-box-line',
            },
            {
              title: 'Embed',
              onClick: () => {
                navigator.clipboard.writeText(
                  `${window.location.origin.toString()}/chatbox/${id}/embed`
                );
                toastr(
                  ToastType.Success,
                  'Embed link copied',
                  'You can use this link on your streaming software'
                );
              },
              icon: 'file-copy-line',
            },
            {
              title: 'Delete',
              icon: 'delete-bin-line',
              color: 'error',
              confirm: {
                title: 'Delete chatbox',
                text: 'Are you sure you want to delete this chatbox theme?',
                word: title,
                confirmText:
                  'For delete this chatbox theme, type the name of the chatbox theme',
                textButton: 'Delete',
                onConfirm: () => {
                  id && deleteChatTheme(id);
                },
              },
            },
          ]}
        />
      </Popover>
    </div>
  );
}

export default ChatCard;
