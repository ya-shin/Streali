import { deleteChatTheme, queryKeys } from '@streali/shared/api';
import { useUserChatThemes } from '@streali/shared/hooks';
import {
  Button,
  ButtonColor,
  Popover,
  PopoverNavigation,
} from '@streali/shared/ui';
import { toastr, ToastType } from '@streali/shared/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function LibraryChatbox() {
  const { data, isLoading } = useUserChatThemes();
  const queryClient = useQueryClient();

  const deleteTheme = useMutation(
    async (themeId: string) => {
      deleteChatTheme(themeId);
    },
    {
      onSuccess: () => {
        void queryClient.invalidateQueries(queryKeys.chats());
      },
    }
  );

  return (
    <div className="p-10">
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-title text-3xl font-bold">Chat library</h1>
        <Button iconLeft="add-circle-fill" link="/chatbox/create">
          Create chatbox
        </Button>
      </div>
      {!isLoading && data && (
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
          {data &&
            data.length > 0 &&
            data?.map((theme) => (
              <div
                key={theme.id}
                className="py-3 pl-4 pr-3 border-2 border-dark-300 rounded-md flex justify-between items-center hover:bg-primary-500"
              >
                <h2>{theme.title}</h2>
                <Popover
                  align="end"
                  side="bottom"
                  trigger={
                    <Button iconLeft="more-line" color={ButtonColor.Dark} />
                  }
                >
                  <PopoverNavigation
                    links={[
                      {
                        title: 'Edit',
                        link: `/chatbox/${theme.id}/edit`,
                        icon: 'edit-box-line',
                      },
                      {
                        title: 'Embed',
                        onClick: () => {
                          navigator.clipboard.writeText(
                            `${window.location.origin.toString()}/chatbox/${
                              theme.id
                            }/embed`
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
                          word: theme.title,
                          confirmText:
                            'For delete this chatbox theme, type the name of the chatbox theme',
                          textButton: 'Delete',
                          onConfirm: () => {
                            theme.id && deleteTheme.mutate(theme.id);
                          },
                        },
                      },
                    ]}
                  />
                </Popover>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default LibraryChatbox;
