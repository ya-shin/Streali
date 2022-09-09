import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient, toastr, ToastType } from '@streali/shared/utils';
import { queryKeys } from '../../query-keys';
import type { ChatTheme } from '@streali/shared/schema';

export function useUpdateChatTheme() {
  const queryClient = useQueryClient();

  return useMutation(
    async (params: ChatTheme) => {
      const { data } = await apiClient.put(`/chat-themes/${params.id}`, params);

      toastr(
        ToastType.Success,
        'Your chat theme is updated!',
        'Congratulation! You can use your theme right now 👍'
      );

      return data;
    },
    {
      onSuccess(_, params) {
        void queryClient.invalidateQueries(queryKeys.chat(params.id));
        void queryClient.invalidateQueries(queryKeys.chats());
      },
    }
  );
}
