import { ChatMessage } from '@streali/shared/interfaces';
import { supabase, toastr, ToastType } from '@streali/shared/utils';

export const createChatTheme = async (
  chatTheme: ChatMessage,
  userId: string,
  title: string
) => {
  const data = {
    ...chatTheme,
    global: {
      ...chatTheme.global,
    },
    createdBy: userId,
    title: title,
  };
  const { data: theme, error } = await supabase
    .from('chatthemes')
    .insert([data]);

  if (data) {
    toastr(
      ToastType.Success,
      'Your chat theme is created!',
      'Congratulation! You can use your theme right now 👍'
    );
  }

  if (error) {
    toastr(ToastType.Error, 'Error 🥲', error.message);
  }

  return { theme, error };
};
