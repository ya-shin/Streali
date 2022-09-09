import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient, toastr, ToastType } from '@streali/shared/utils';
import { queryKeys } from '../../query-keys';
import type { ChatTheme } from '@streali/shared/schema';

export function useCreateChatTheme() {
  const queryClient = useQueryClient();

  return useMutation(
    async (params: ChatTheme) => {
      const { data } = await apiClient.post('/chat-themes', params);

      toastr(
        ToastType.Success,
        'Your chat theme is created!',
        'Congratulation! You can use your theme right now 👍'
      );

      return data;
    },
    {
      onSuccess() {
        void queryClient.invalidateQueries(queryKeys.chats());
      },
    }
  );
}
