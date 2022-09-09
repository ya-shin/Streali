import { useUserChatThemes } from '@streali/shared/hooks';
import { Button, ChatCard } from '@streali/shared/ui';

export function LibraryChatbox() {
  const { data, isLoading } = useUserChatThemes();

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
              <div key={theme.id}>
                <ChatCard title={theme.title} id={theme.id} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default LibraryChatbox;
