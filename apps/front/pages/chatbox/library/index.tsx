import { useUserChatThemes } from '@streali/shared/hooks';
import { Button, ButtonColor, Popover } from '@streali/shared/ui';
import { supabase } from '@streali/shared/utils';
import Link from 'next/link';

export function Library() {
  const userId = supabase.auth.user()?.id;
  const { data, isLoading } = useUserChatThemes(userId);

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
          {data.map((theme) => (
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
                <Link href={`/chatbox/edit/${theme.id}`}>Edit</Link>
              </Popover>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Library;
