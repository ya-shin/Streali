import { ChatSettings } from '@streali/shared/ui';

/* eslint-disable-next-line */
export interface CreateProps {}

export function Create(props: CreateProps) {
  return (
    <div className="flex">
      <div className="w-[400px]">
        <ChatSettings />
      </div>
    </div>
  );
}

export default Create;
